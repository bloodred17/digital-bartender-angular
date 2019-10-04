import { Injectable } from '@angular/core';
import { CocktailApiService } from './cocktail-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsDataService {
  cocktails = [];
  error: any = null;

  cocktailsObs = Observable.create((observer) => {
    this.cocktails.forEach((item, idx) => {
      if(idx === this.cocktails.length - 1){
        observer.complete(item);
      }
      observer.next(item);
    });
  });

  constructor(
    private cocktailApi: CocktailApiService
  ) { }

  getCocktailsObs(): Observable<[]> {
    return this.cocktailsObs;
  }

  getCocktails() {
    return this.cocktails;
  }

  getCocktail(){
    this.cocktailApi.fetchCocktail().subscribe(responseData => {
      this.cocktails.push(responseData[0]);
      this.error = null;
      // console.log('Service Cocktails: ');
      // console.log(this.cocktails);
    }, error => {
      this.error = error.message;
    });
  }
}
