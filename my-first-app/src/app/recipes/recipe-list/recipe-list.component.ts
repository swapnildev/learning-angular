import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'My Test recipe', 'https://www.spendwithpennies.com/wp-content/uploads/2019/10/taco-cheese-ball-recipe-4.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
