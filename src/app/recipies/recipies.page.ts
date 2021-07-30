import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  recipes: Recipe[];
  constructor(private recipesService: RecipiesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipies();
  }

}
