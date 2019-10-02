import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CocktailApiService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCocktail(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .pipe(
        map(response => {
          for(const key in response){
            if(response.hasOwnProperty(key)){          
              return response[key];
            }
          }   
        })
      );
  }
}
