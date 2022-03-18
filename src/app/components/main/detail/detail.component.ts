import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { forkJoin, Subscription, switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { Video } from 'src/app/models/video.model';
import { MoviesService } from 'src/app/services/movies.service';
import { IMGPATH } from 'src/app/shared/contants/share.contants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  movie: Movie | undefined;
  video: Video = { id: 0, key: '' };
  subs: Subscription[] = [];
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private moviesService: MoviesService
  ) {}

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe());
  }

  ngOnInit(): void {
    this.subs.push(
      this.moviesService
        .getDetail(this.config.data.id)
        .pipe(
          tap((res) => (this.movie = res)),
          switchMap(() => {
            return this.moviesService.getVideo(this.config.data.id);
          }),
          tap((res) => {
            this.video = res.results[1];
          })
        )
        .subscribe()
    );
    // this.subs.push(
    //   forkJoin(
    //     this.moviesService.getDetail(this.config.data.id),
    //     this.moviesService.getVideo(this.config.data.id)
    //   ).subscribe((res) => {
    //     this.movie = res[0];
    //     console.log(res[1].results[0]);
    //     this.video = res[1].results[0];
    //   })
    // );
  }

  setImage(name: string): string {
    return IMGPATH + name;
  }
}
