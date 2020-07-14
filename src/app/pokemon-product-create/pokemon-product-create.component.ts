import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-product-create',
  templateUrl: './pokemon-product-create.component.html',
  styleUrls: ['./pokemon-product-create.component.css']
})
export class PokemonProductCreateComponent implements OnInit {
  productList: FormArray;
  submitted = false;
  showSuccessMessage: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.productList = new FormArray([]);
    this.onAdd();
    console.log(this.productList);
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.productList);
    if (this.productList.valid) {
      let key = 'productList';
      let tempArray = localStorage.getItem(key);
      if (tempArray) {
        tempArray = JSON.parse(tempArray);
        localStorage.setItem(key, JSON.stringify([...tempArray, ...this.productList.value]))
      } else {
        localStorage.setItem(key, JSON.stringify(this.productList.value));
      }
      this.submitted = false;
      this.initForm();
      this.showSuccessMessage = true;
    }

  }

  onAdd() {
    if (this.productList.value.length < 5) {
      let productForm = this.fb.group({
        name: ['', [Validators.required, Validators.min(3), Validators.pattern('^[A-Za-z0-9]+$')]],
        description: ['', [Validators.required, Validators.min(3), Validators.pattern('^[A-Za-z0-9]+$')]],
        price: ['', [Validators.required]],
        mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        imageUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
        category: ['', [Validators.required]],
        numberType: ['', [Validators.required]]
      });
      this.productList.push(productForm);

    }

  }
}
