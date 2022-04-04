import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class CardsModule { }
