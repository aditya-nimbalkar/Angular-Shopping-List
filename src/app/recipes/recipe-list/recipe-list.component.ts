import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() detailSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simpoly a test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
    new Recipe('A Testy Recipe', 'This is also a test', 'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/01/main/1601p25-skillet-chicken-roasted-potatoes-carrots.jpg?itok=McbboinY')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.detailSelected.emit(recipe);
  }

}
