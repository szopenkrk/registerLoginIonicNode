import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import  {Observable} from 'rxjs/Rx';


@Component({
  templateUrl: 'build/pages/girls/girls.html',
})
export class GirlsPage {
  response: Observable<any[]>;

  constructor(private navCtrl: NavController, private http: Http) {
    var url = 'http://localhost:8080/api/girls';

    this.response = this.http.get(url).map(res => res.json());
  }

}
