import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationService} from '../../service/validation.service';

@Component({
  selector: 'app-form-group',
  template: `
    <div class="form-group" [ngClass]="{'has-error': errorMessage !== null}">
      <label class="{{labelClasses}} control-label">{{fieldTitle}}</label>
      <div class="{{controlClasses}}">
          <ng-content></ng-content>
          <div class="input-error" *ngIf="errorMessage !== null" align="left">{{errorMessage}}</div>
      </div>
    </div>
  `
})
export class FormGroupComponent {
  @Input() control: FormControl;
  @Input() fieldTitle: string;
  @Input('labelClasses') labelClasses = '';
  @Input('controlClasses') controlClasses = '';

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
