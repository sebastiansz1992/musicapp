import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
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

    this.loadingArtista = true;

    this.SPOTIFY.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtista = false;
    });

  }

  getTopTracks( id: string ): void {
    this.SPOTIFY.getTopTracks( id ).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

  ngOnInit(): void { }
}
