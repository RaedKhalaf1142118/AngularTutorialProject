import { Component, OnInit } from '@angular/core';
import { Recipe} from '../models/Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe = undefined;
  constructor() { }

  ngOnInit() {
  }

  selectRecipe(event:any){
      console.log(event.selectedRecipe.name);
      this.selectedRecipe = event.selectedRecipe;
  }
}
