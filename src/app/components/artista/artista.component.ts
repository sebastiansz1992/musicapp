import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks;
  loadingArtista: boolean;

  constructor(
    private ROUTE: ActivatedRoute,
    private SPOTIFY: SpotifyService) {

    this.loadingArtista = true;
    this.ROUTE.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });

  }

  getArtista(id: string): void {

    this.SPOTIFY.getArtista(id).subscribe(artista => {
      this.artista = artista;
    });

  }

  getTopTracks( id: string ): void {
    this.SPOTIFY.getTopTracks( id ).subscribe( topTracks => {
      this.topTracks = topTracks;
    });
  }

  ngOnInit(): void { }
}
