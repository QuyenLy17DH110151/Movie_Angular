import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { IMGPATH } from 'src/app/shared/contants/share.contants';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [DialogService],
})
export class IndexComponent implements OnInit, OnDestroy {
  movies: Array<Movie> = [];
  subs: Subscription[] = [];
  constructor(
    private moviesService: MoviesService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.loadMovie(1);
  }

  loadMovie(page: number) {
    this.subs.push(
      this.moviesService.loadPopular(page).subscribe({
        next: (res) => {
          this.movies = res.results;
        },
      })
    );
  }

  setImage(name: string): string {
    return IMGPATH + name;
  }

  show(id: number, title: string) {
    const ref = this.dialogService.open(DetailComponent, {
      data: {
        id: id,
      },
      header: title,
      width: '80%',
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe());
  }
}
