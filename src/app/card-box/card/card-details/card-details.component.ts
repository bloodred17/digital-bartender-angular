import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsDataService } from 'src/app/services/cocktails-data.service';
// import { AppFunctions } from 'src/app/app-functions';
import { Ingredient } from 'src/app/app-ingredients.interface';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  selectedCocktail;
  id = null;
  cocktails = [];
  ingredients = [];

  constructor(
    private route: ActivatedRoute,
    private cocktailsData: CocktailsDataService,
    // private appFunctions: AppFunctions
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id === undefined || this.id === null){
      this.route.params.subscribe((params: Router) => {
        this.id = +params['id'];
      });
    }
    this.cocktails = this.cocktailsData.getCocktails();
    this.selectedCocktail = this.cocktails.find((item) => {
      if(item.idDrink === this.id){
        return item;
      }
    });
    // console.log(this.selectedCocktail);
    this.arrangeIngredients(this.selectedCocktail);
  }

  arrangeIngredients(cocktail) {
    const keys = Object.keys(cocktail);
    let ingredient: Ingredient;
    let name: string;
    let measure: string;
    let pos, name_id, measure_id;
    let names = [];
    let measures = [];
    for(let key of keys){

      if(key.includes('Ingredient') && cocktail[key] !== null){
        pos = key.lastIndexOf('t');
        name_id = key.substr(pos+1);
        name = cocktail[key];
        names.push(name);
      }
      if(key.includes('Measure') && cocktail[key] !== null){
        pos = key.lastIndexOf('e');
        measure_id = key.substr(pos+1);
        measure = cocktail[key];
        measures.push(measure);
      }
    }
    // console.log(names);
    // console.log(measures);
    for(let i = 0; i < names.length; i++){
      ingredient = { name: names[i], measure: measures[i] };
      this.ingredients.push(ingredient);
    }
    // console.log(this.ingredients);
  }

}

