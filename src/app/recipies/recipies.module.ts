import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipiesPageRoutingModule } from './recipies-routing.module';

import { RecipiesPage } from './recipies.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipiesPageRoutingModule
  ],
  declarations: [RecipiesPage, RecipeItemComponent]
})
export class RecipiesPageModule {}
