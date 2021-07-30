import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipiesPage } from './recipies.page';

const routes: Routes = [
  {
    path: '',
    component: RecipiesPage
  },
  {
    path: 'recipe-detail',
    loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipiesPageRoutingModule {}
