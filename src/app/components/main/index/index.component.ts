import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription, mergeMap } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MockService } from 'src/app/services/mock.service';
import { MoviesService } from 'src/app/services/movies.service';
import { IMGPATH } from 'src/app/shared/contants/share.contants';
import { DetailComponent } from '../detail/detail.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [DialogService, MessageService],
})
export class IndexComponent implements OnInit, OnDestroy {
  @Output() newItemEvent = new EventEmitter<number>();
  movies: Array<Movie> = [];
  subs: Subscription[] = [];
  mock: string = '';
  constructor(
    private moviesService: MoviesService,
    public dialogService: DialogService,
    private mockService: MockService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // this.loadMovie(1);
    this.fixBugAsync();
  }

  shareNumber() {
    this.newItemEvent.emit(Number.parseInt(this.mock));
  }

  fixBugAsync() {
    const results = this.mockService
      .ObOne()
      .pipe(mergeMap((x) => this.mockService.ObTwo(x)));
    this.subs.push(
      results.subscribe((x) => {
        this.mock = x.toString();
        this.shareNumber();
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Via MessageService',
        });
      })
    );
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
