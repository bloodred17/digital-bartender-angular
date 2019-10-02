import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBoxComponent } from './card-box/card-box.component';
import { CardComponent } from './card-box/card/card.component';
import { CocktailApiService } from './services/cocktail-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailsComponent } from './card-box/card/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardBoxComponent,
    CardComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CocktailApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
