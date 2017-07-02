import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { Ingredient } from '../../models/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') name;
  @ViewChild('amountInput') amount;
  
  constructor() { }

  ngOnInit() {
  }
  
  
  onAdd(){
      this.onAddIngredient.emit(new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value));
  }
}
