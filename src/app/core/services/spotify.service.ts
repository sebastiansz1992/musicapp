import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private HTTP: HttpClient) {

  }

  getQuery(query: string): Observable<object> {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD91AqJWebrmaIM45JB7OyojErgz58RYM4WAVbSsSJtgX3BttCPqM7VgFAbMuy9GnD8RtqM_8k2lUdagIc'
    });

    return this.HTTP.get(url, { headers });

  }

  getNewReleases(): Observable<object> {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }

  getArtistas(termino: string): Observable<object> {

    return this.getQuery(`search?q=${termino}=&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

  }

  getArtista(id: string): Observable<object> {

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<object> {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }

}
