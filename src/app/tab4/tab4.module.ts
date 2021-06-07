import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { CustomCheckboxModule } from '../custom-checkbox/custom-checkbox.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule,
    ReactiveFormsModule,
    CustomCheckboxModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
