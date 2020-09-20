import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

import { ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

// importing meterial theme 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar'
import {MatDialogModule, MatDialog} from '@angular/material/dialog'
import {MatDividerModule} from '@angular/material/divider';
import { MatExpansionModule} from '@angular/material/expansion'


// toastr Module 
import {ToastrModule} from 'ngx-toastr'


const Material = [
  MatButtonModule,
  CommonModule,

  FormsModule,
  ReactiveFormsModule,

  BrowserModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatFormFieldModule,
  MatExpansionModule,

  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatGridListModule,
  MatCardModule,
  MatSnackBarModule,
  // MatSnackBar,
  MatDialogModule,
  MatDividerModule, 
  // MatDialog
  ToastrModule.forRoot()
]

@NgModule({
  declarations: [],
  imports: [
    Material
  ],
  exports: [
    Material
  ],
  bootstrap: [UserLoginComponent]
})
export class MaterialModule { }
