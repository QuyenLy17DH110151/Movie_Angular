import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit, OnDestroy {
  movies: Array<Movie> = [];
  subs: Subscription[] = [];
  IMGPATH: string = 'https://image.tmdb.org/t/p/w1280';
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    this.subs.push(
      this.moviesService.loadPopular(1).subscribe({
        next: (res) => {
          this.movies = res.results;
        },
      })
    );
  }

  setImage(name: string): string {
    return this.IMGPATH + name;
  }

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe());
  }
}
