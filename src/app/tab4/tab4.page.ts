import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  exampleForm: FormGroup;

  constructor() {
    this.exampleForm = new FormGroup({
      food: new FormControl(),
      hike: new FormControl(),
      travel: new FormControl(),
      fashion: new FormControl(true)
    });
  }

}
