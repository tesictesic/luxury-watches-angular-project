import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastCartComponent } from './components/toast-cart/toast-cart.component';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    ToastCartComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ToastCartComponent,
    ReactiveFormsModule,
    TruncatePipe
  ]
})
export class SharedModule { }
