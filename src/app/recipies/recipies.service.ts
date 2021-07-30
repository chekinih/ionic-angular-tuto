import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  private recipes: Recipe[]= [
    {
      id: 'r1',
      title: 'Shnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Palestine_sunbird_%28Cinnyris_osea_osea%29_male.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Palestine_sunbird_%28Cinnyris_osea_osea%29_male.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipies() {
    //...this.recipes pulls all the elements of the array recipes out of it
    //and then add it to a new array and return it (it is a copy of the recipes array)
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe =>
       recipe.id === recipeId
      )
    };
  }

  deleteRecipe(recipeId: string) {

    this.recipes = this.recipes.filter(recipe =>
      recipe.id !== recipeId
      );
    }
}
