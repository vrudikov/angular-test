import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {BlankPageComponent} from './components/layout/blank-page/blank-page.component';
import {BlankTestComponent} from './components/blank-test/blank-test.component';
import {IndexComponent} from './components/index/index.component';
import {NgxbSelectTestComponent} from './components/ngxb-test/ngxb-select-test/ngxb-select-test.component';
import {NgxbSelect2TestComponent} from './components/ngxb-test/ngxb-select2-test/ngxb-select2-test.component';

export const appRoutes: Routes = [
  // Main
  {
    path: '', redirectTo: '/index', pathMatch: 'full'
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'ngxb-select-test', component: NgxbSelectTestComponent
  },
  {
    path: 'ngxb-select2-test', component: NgxbSelect2TestComponent
  },
  {
    path: 'blank', component: BlankPageComponent,
    children: [
      {
        path: 'test', component: BlankTestComponent,
      }
    ]
  },
  // Handle all other routes
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ]
})
export class AppRoutingModule {
}
