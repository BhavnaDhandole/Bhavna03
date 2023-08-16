import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule

  ],
  exports:[
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
