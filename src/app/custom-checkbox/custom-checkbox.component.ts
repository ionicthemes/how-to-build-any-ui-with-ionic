import { Component, ContentChild, HostBinding } from '@angular/core';
import { IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-custom-checkbox',
  template: '<ng-content></ng-content>',
  styles: [':host { display: block; }'],
})

export class CustomCheckboxComponent {

  // get access to the IonCheckbox element
  @ContentChild(IonCheckbox) checkbox: IonCheckbox;

  @HostBinding('class.checkbox-checked') isChecked: boolean;

  constructor() {}

  ngAfterContentInit() {
    // set the checked state
    this.isChecked = this.checkbox.checked;

    // subscribe to changes
    this.checkbox.ionChange.subscribe(changes => {
      this.isChecked = changes.detail.checked;
    });
  }
}
