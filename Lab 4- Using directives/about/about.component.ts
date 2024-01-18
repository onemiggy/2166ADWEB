import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //String Implementation

  position = "Coach";
  work_experience = 10;
  email = 'juanmiggy)@gmail.com';
  website = 'www.boogie.com';
  phone = 8881-363;

  //image interpolation/binding
  imageURL:string = "assets/boogie.jpg"
  imageW: number = 110;
  imageH: number = 110;

}
