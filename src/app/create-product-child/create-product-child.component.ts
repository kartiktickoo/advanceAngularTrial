import { Component, OnInit, Input } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product-child',
  templateUrl: './create-product-child.component.html',
  styleUrls: ['./create-product-child.component.css']
})

export class CreateProductChildComponent implements OnInit {

  categoryList: any = [' Electronics', 'Cloths', 'Blankets']
  numberTypeList: any = ['Mobile ', 'Landline']
  @Input() productForm: any;
  @Input() submitted = false;


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  get productFormControl() {
    return this.productForm.controls;
  }

  // Choose city using select dropdown
  changeSelectNumberType(e) {
    console.log(e.value)
    this.numberType.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get numberType() {
    return this.productForm.get('numberType');
  }

  // Choose city using select dropdown
  changeCategory(e) {
    console.log(e.value)
    this.category.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get category() {
    return this.productForm.get('category');
  }
}