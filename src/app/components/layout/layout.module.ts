import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlankPageComponent} from './blank-page/blank-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [BlankPageComponent]
})
export class LayoutModule { }
