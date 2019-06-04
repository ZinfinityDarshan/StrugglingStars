import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatChipsModule,
   MatBottomSheetModule, MatListModule, MatDividerModule, MatCardModule, MatSnackBarModule,
    MatStepperModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatInputModule, MatFormFieldModule, MatChipsModule, MatBottomSheetModule,
    MatListModule, MatDividerModule, MatCardModule, MatSnackBarModule, MatStepperModule, MatCheckboxModule
    ,MatAutocompleteModule
  ],
  exports:[
    MatInputModule, MatButtonModule, MatFormFieldModule, MatChipsModule, MatBottomSheetModule,
    MatListModule, MatDividerModule, MatCardModule, MatSnackBarModule, MatStepperModule, MatCheckboxModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
