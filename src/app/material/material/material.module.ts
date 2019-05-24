import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatChipsModule,
   MatBottomSheetModule, MatListModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatInputModule, MatFormFieldModule, MatChipsModule, MatBottomSheetModule,
    MatListModule, MatDividerModule
  ],
  exports:[
    MatInputModule, MatButtonModule, MatFormFieldModule, MatChipsModule, MatBottomSheetModule,
    MatListModule, MatDividerModule
  ]
})
export class MaterialModule { }
