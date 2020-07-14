import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-product-list',
  templateUrl: './pokemon-product-list.component.html',
  styleUrls: ['./pokemon-product-list.component.css']
})
export class PokemonProductListComponent implements OnInit {
  productList = [];

  constructor() { }

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('productList'));
  }

}
