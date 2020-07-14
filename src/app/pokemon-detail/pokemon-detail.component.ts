import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  sub: Subscription;
  pokemonDetailObj: any;
  colorObj = {
    'grass': 'green',
    'poison': 'violet',
    'ground': 'brown',
    'psychic': 'purple',
    'flying': 'blue',
    'fire': 'orange',
    'ice': 'blue',
    'fighting': 'red',
    'fairy': 'pink',
    'water': 'blue',
    'electric': 'blue'
  }
  error: any;
  constructor(
    private route: ActivatedRoute,
    public helperService: HelperService) { }

  ngOnInit() {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        console.log(params.url);
        console.log(params);
        let url: string;
        if (params.search) {
          url = 'https://pokeapi.co/api/v2/pokemon/' + params.url;
        } else {
          url = params.url;
        }
        this.getPokemonDetail(url);
      });
  }

  getPokemonDetail(url: string) {
    this.helperService.getPokemonDetail(url)
      .subscribe((resp: any) => {
        this.pokemonDetailObj = resp;
        console.log(this.pokemonDetailObj)
      }, error => {
        this.error = error.message;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getBackgroundColor(name) {
    return this.colorObj[name]
  }
}