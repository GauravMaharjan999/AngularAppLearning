import { Component } from '@angular/core';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent {

  name:string ="Rijan";
  tutor={
    name :"Gaurav Maharjan",
    address :"Kalanki",
    phoneNumber:"9800000",
    hiringPrice:999,
    tutorProfileImagePath:"/assets/images/JokerProfileImage.jpg"

  }

  getHiringPrice(){
    return this.tutor.hiringPrice
  }



}
