import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';
import {GirlsPage} from "../girls/girls";


@Component({
  templateUrl: 'build/pages/home/home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  onSubmit(value: string): void {
      console.log('Submitted value: ', value);
  }

  itemClicked(item) {
    this.navCtrl.push(GirlsPage);
  }
}
