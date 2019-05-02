import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatInputModule, MatFormFieldModule
  ],
  exports:[
    MatInputModule, MatButtonModule, MatFormFieldModule
  ]
})
export class MaterialModule { }
