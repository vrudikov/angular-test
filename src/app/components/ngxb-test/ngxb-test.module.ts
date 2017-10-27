import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxbSelectTestComponent} from './ngxb-select-test/ngxb-select-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap';
import {FormGroupModule} from '../form-group/form-group.module';
import {NgxbSelect2TestComponent} from './ngxb-select2-test/ngxb-select2-test.component';
import {Typeahead2Module} from './typeahead/typeahead2.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    Typeahead2Module.forRoot(),
    FormGroupModule
  ],
  declarations: [
    NgxbSelectTestComponent,
    NgxbSelect2TestComponent
  ]
})
export class NgxbTestModule { }
