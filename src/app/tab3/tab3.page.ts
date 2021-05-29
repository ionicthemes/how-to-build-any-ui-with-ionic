import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
