import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/?apikey=d8d702ff';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${title}`);
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&i=${imdbID}`);
  }
}

