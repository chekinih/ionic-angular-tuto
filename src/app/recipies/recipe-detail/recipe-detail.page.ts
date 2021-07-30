import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipiesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // make sure there is a parameter recipeId set in app-routing.module.ts
      if(!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipies']);
        return;
      }
      // extract the param from the paramMap object
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }


  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure ?',
      message: 'Do you really want to delete this recipe ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipies']);
          }
        }
      ]
    })
     .then(alertEl => {
      alertEl.present();
    });

  }

}
