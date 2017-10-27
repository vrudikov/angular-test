import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationService} from '../../service/validation.service';

@Component({
  selector: 'app-inline-form-control',
  template: `
    <div class="{{controlClasses}}" [ngClass]="{'has-error': errorMessage !== null}">
      <ng-content></ng-content>
      <div class="input-error" *ngIf="errorMessage !== null" align="left">{{errorMessage}}</div>
    </div>
  `
})
export class InlineFormControlComponent {
  @Input() control: FormControl;
  @Input('controlClasses') controlClasses = '';

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage
        (propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
