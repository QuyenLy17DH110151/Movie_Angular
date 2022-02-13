import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  API_KEY: string = '3b0c7bd2453a463c1077f77f3e23aa0a';
  language: string = 'en-US';
  constructor(private http: HttpClient) {}

  loadPopular(page: number): Observable<any> {
    const ULR_POPULAR = `${environment.url_movie}/movie/popular?api_key=${this.API_KEY}&language=${this.language}&page=${page}`;
    return this.http.get(ULR_POPULAR);
  }

  getDetail(id: number): Observable<any> {
    const url = `${environment.url_movie}/movie/${id}?api_key=${this.API_KEY}&language=${this.language}`;
    return this.http.get(url);
  }

  getVideo(id: number): Observable<any> {
    const url = `${environment.url_movie}/movie/${id}/videos?api_key=${this.API_KEY}&language=${this.language}`;
    return this.http.get(url);
  }
}
