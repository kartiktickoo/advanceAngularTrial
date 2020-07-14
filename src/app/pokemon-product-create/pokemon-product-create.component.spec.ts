import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProductCreateComponent } from './pokemon-product-create.component';

describe('PokemonProductCreateComponent', () => {
  let component: PokemonProductCreateComponent;
  let fixture: ComponentFixture<PokemonProductCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProductCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
