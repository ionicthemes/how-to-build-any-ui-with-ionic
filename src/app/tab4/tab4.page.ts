import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CheckboxCheckedValidator } from './checkbox-checked.validator';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  exampleForm: FormGroup;
  interestsList: any = [
   {
     name: "Food",
     value: "food",
     image: 'url(https://images.pexels.com/photos/220911/pexels-photo-220911.jpeg?auto=compress&cs=tinysrgb)'
   },
   {
     name: "Hike",
     value: "hike",
     image: 'url(https://images.pexels.com/photos/6102505/pexels-photo-6102505.jpeg?auto=compress&cs=tinysrgb)'
   },
   {
     name: "Travel",
     value: "travel",
     image: 'url(https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb)',
     selected: true
   },
   {
     name: "Fashion",
     value: "fashion",
     image: 'url(https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg?auto=compress&cs=tinysrgb)'
   }
 ];
 submitError = 'Please select at least 2 options.';
 submitSuccess: string;

  constructor() {
    this.exampleForm = new FormGroup({
      // FormArray aggregates the values of each child FormControl into an array
      interests: new FormArray(
        // creates a FormControl for each 'Interest' from our interestsList
        // defined above and sets its selected value to 'true' or 'false'
        this.interestsList.map(x => new FormControl(x.selected)),
        // adds a custom validator that requires at least 2 checkboxes to be selected
        CheckboxCheckedValidator.minSelectedCheckboxes(2)
      )
    });

    this.exampleForm.get('interests').valueChanges
    .subscribe(values => {
      // reset the submitted values string
      this.submitSuccess = '';
    });
  }

  onSubmit() {
    const selectedInterests = [];

    this.exampleForm.value.interests
    .map((value: any, index: number) => {
      if (value) {
        selectedInterests.push(this.interestsList[index].name);
      }
    });

    this.submitSuccess = 'Submitted values: ' + selectedInterests;
  }
}
