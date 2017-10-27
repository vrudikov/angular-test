import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from '../component-loader';
import { PositioningService } from '../positioning';

@NgModule({
  imports: [CommonModule],
  declarations: [TypeaheadContainerComponent, TypeaheadDirective],
  exports: [TypeaheadContainerComponent, TypeaheadDirective],
  entryComponents: [TypeaheadContainerComponent]
})
export class Typeahead2Module {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: Typeahead2Module,
      providers: [ComponentLoaderFactory, PositioningService]
    };
  };
}
