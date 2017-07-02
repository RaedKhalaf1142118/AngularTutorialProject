import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../models/Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() onSelectRecipe = new EventEmitter<{ selectedRecipe:Recipe }>();
  
  recipes:Recipe[] = 
  [
   new Recipe("A Test Recipe2", " This is simply a test2", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"),
   new Recipe("A Test Recipe", " This is simply a test2", "http://2.bp.blogspot.com/-pDRK83uEM3k/UwI2xX6C7FI/AAAAAAAAATA/cc4NBIFsY4w/s1600/kfood.JPG")
  ];
    
  constructor() { }

  ngOnInit() {
  }
  
  selectRecipe(selectedRecipe:Recipe){
      this.onSelectRecipe.emit({selectedRecipe:selectedRecipe});
  }

}
