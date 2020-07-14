import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  baseUrl = 'http://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) {
  }

  getPokemonList(limit: number, offset: number) {
    // let configUrl = this.baseUrl + `?limit=${limit}&offset=${offset}`;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetail(pokemonUrl: string) {
    return this.http.get(pokemonUrl);
  }
}
