import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class CocktailApiService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCocktail(){
    // return this.http.get('https://www.thecocktaildb.com/api/json/v2/9973533/random.php')
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .pipe(
        map(response => {
          for(const key in response){
            if(response.hasOwnProperty(key)){          
              return response[key];
            }
            return response;
          }   
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
