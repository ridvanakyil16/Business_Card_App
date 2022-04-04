import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
  
  { 
    path: '',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
