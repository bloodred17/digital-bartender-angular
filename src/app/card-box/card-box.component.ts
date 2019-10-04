import { Component, OnInit } from '@angular/core';
import { CocktailsDataService } from '../services/cocktails-data.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  cocktails = [];
  error: any = null;
  
  constructor(
    private cocktailData: CocktailsDataService
  ) { }

  ngOnInit() {
    this.cocktails = this.cocktailData.getCocktails();
    this.error = this.cocktailData.error;
  }

  onFetchCocktails(){
    this.cocktailData.getCocktail();

    this.cocktails = [];
    this.cocktails = this.cocktailData.getCocktails();
    this.error = this.cocktailData.error;
  }
}
