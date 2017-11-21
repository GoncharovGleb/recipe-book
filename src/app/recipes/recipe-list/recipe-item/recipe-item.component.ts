import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  @Input('id') id: number;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
  }

  selectRecipe(index){
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
