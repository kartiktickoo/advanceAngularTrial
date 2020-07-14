import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductChildComponent } from './create-product-child.component';

describe('CreateProductChildComponent', () => {
  let component: CreateProductChildComponent;
  let fixture: ComponentFixture<CreateProductChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
