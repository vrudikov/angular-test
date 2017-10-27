import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxbTestModule} from './components/ngxb-test/ngxb-test.module';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LayoutModule} from './components/layout/layout.module';
import {BlankTestComponent} from './components/blank-test/blank-test.component';
import {AppRoutingModule} from './app-routing.module';
import {IndexModule} from './components/index/index.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BlankTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    IndexModule,
    NgxbTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
