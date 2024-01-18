import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showText: boolean = true;

  toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Bruce', lastName: 'Wayne', email: 'bruce.wayne@gmail.com', role: 'User' },   
    { firstName: 'Clarke', lastName: 'Kent', email: 'clarke.kent@gmail.com', role: 'Admin' }, 
    { firstName: 'Barry', lastName: 'Allen', email: 'barry.allen@gmail.com', role: 'Admin' }, 
    { firstName: 'Hal', lastName: 'Jordan', email: 'hal.jordan@gmail.com', role: 'User' }, 
    { firstName: 'Arthur', lastName: 'Curry', email: 'arthur.curry@gmail.com', role: 'User' } 
    ];

}
