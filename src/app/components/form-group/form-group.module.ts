import {NgModule} from '@angular/core';
import {FormGroupComponent} from './form-group.component';
import {CommonModule} from '@angular/common';
import {InlineFormControlComponent} from './inline-form-control.component';

@NgModule({
  declarations: [FormGroupComponent, InlineFormControlComponent],
  exports: [FormGroupComponent, InlineFormControlComponent],
  imports: [CommonModule]
})
export class FormGroupModule {
}
