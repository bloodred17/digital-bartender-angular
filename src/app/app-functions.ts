import { Ingredient } from './app-ingredients.interface';


export class AppFunctions {
    ingredients: Ingredient[] = [];

    arrangeIngredients(cocktail): Ingredient[] {
        const keys = Object.keys(cocktail);
        for(let key of keys){
            let ingredient: Ingredient;
            let pos, id;
            if(key.includes('Ingredient') && cocktail[key] !== null){
                pos = key.lastIndexOf('t');
                id = key.substr(pos);

                ingredient.name = cocktail[key];
            }
            if(key.includes('Measure'+id) && cocktail[key] !== null){
                ingredient.measure = cocktail[key];
            }
            console.log(ingredient);
            this.ingredients.push(ingredient);
        }
        return this.ingredients;
    }
}