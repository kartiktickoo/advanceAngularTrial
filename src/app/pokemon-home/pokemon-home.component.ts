import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})
export class PokemonHomeComponent implements OnInit {
  pokemonList: any;
  limit = 30;
  offset = 0;

  constructor(public helperService: HelperService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.helperService.getPokemonList(this.limit, this.offset)
      .subscribe((resp: any) => {
        this.pokemonList = resp.results;
        console.log(this.pokemonList)
      });
  }

  onPrevious() {
    if (this.offset !== 0) {
      this.offset -= 30;
      this.helperService.getPokemonList(this.limit, this.offset)
        .subscribe((resp: any) => {
          this.pokemonList = resp.results;
          console.log(this.pokemonList)
        });
    }
  }

  onNext() {
    this.offset += 30;
    this.helperService.getPokemonList(this.limit, this.offset)
      .subscribe((resp: any) => {
        this.pokemonList = resp.results;
        console.log(this.pokemonList)
      });
  }
}
