import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxbSelectTestComponent} from './ngxb-select-test/ngxb-select-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    NgxbSelectTestComponent
  ]
})
export class NgxbTestModule { }
