import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private SPOTIFY: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void {

    this.SPOTIFY.getArtistas(termino)
      .subscribe((data: any) => {
        this.artistas = data;
      });

  }

}
