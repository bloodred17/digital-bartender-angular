import { Component, OnInit } from '@angular/core';
import { CocktailsDataService } from '../services/cocktails-data.service';
import { ScrollEvent } from 'ngx-scroll-event'

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  cocktails = [];
  error: any = null;
  btn_visible: boolean = false;
  
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

  public handleScroll(event: ScrollEvent) {
    // console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom) {
      // console.log(`the user is reaching the bottom`);
      this.btn_visible = true;
    }
    if (event.isReachingTop) {
      // console.log(`the user is reaching the top`);
      this.btn_visible = false;
    }else{
      this.btn_visible = true;
    }
    // if (event.isWindowEvent) {
    //   // console.log(`This event is fired on Window not on an element.`);
    // }
 
  }
}
