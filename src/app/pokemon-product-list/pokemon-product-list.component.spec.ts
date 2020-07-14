import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProductListComponent } from './pokemon-product-list.component';

describe('PokemonProductListComponent', () => {
  let component: PokemonProductListComponent;
  let fixture: ComponentFixture<PokemonProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
