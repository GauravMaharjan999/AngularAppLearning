import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {
  @Input() tutor:{
  name: string,
  address: string,
  phoneNumber: string,
  hiringPrice: number,
  tutorProfileImagePath: string
  };

  hireNowClick(event:MouseEvent):void{
    const hiringPrice = (event.target as HTMLButtonElement).name;
    console.log('Hiring Price:', hiringPrice);
  }

}
