import { Component, OnInit } from '@angular/core';


import { Observable, map, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ 

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;



  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"]; 
  price: number = 20000;
    ngOnInit() {
    }
    
  time$:Observable<Date>;
  title = 'angular_pipe-no';
  presentDate = new Date(); 
    constructor(){
      this.time$ = interval(1000).pipe (map (() => new Date()));
    }
     
    }



