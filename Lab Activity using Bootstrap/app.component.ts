import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_data_binding';
  clientName = "Miguel Enriquez"; //property
  appliedCSS = "black"; //style
  notAppliedCSS = false;
  myColor = "white";
  brand = "Aroma Alcove";

  clickCount =0
  clickMe(){
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount=0;
  }
}

