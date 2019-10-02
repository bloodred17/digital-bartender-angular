import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card-box/card/card.component';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './card-box/card/card-details/card-details.component';
import { CardBoxComponent } from './card-box/card-box.component';


const routes: Routes = [
  { path: '', component: CardBoxComponent },
  { path: 'cocktail/:id', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
