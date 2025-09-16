import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaylorApiService {
  private baseUrl = 'https://taylor-swift-api.sarbo.workers.dev';

  constructor(private http: HttpClient) {}

  // Alle Alben abrufen
  getAlbums(): Observable<any> {
    return this.http.get(`${this.baseUrl}/albums`);
  }

  // Songs eines bestimmten Albums abrufen
  getAlbumSongs(albumId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/albums/${albumId}`);
  }

  // Songtext eines Songs abrufen
  getLyrics(songId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lyrics/${songId}`);
  }
}
