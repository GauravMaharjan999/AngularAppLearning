import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent {

  tutors = [
    {
      name: "Gaurav Maharjan",
      address: "Kalanki",
      phoneNumber: "9800000",
      hiringPrice: 0,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Emily Johnson",
      address: "Downtown",
      phoneNumber: "9876543",
      hiringPrice: 899,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Michael Thompson",
      address: "Park Avenue",
      phoneNumber: "9123456",
      hiringPrice: 1099,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Sophia Garcia",
      address: "Main Street",
      phoneNumber: "9234567",
      hiringPrice: 799,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Daniel Lee",
      address: "Sunset Boulevard",
      phoneNumber: "9345678",
      hiringPrice: 899,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Isabella Martinez",
      address: "Broadway",
      phoneNumber: "9456789",
      hiringPrice: 999,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Alexander Wilson",
      address: "Ocean View",
      phoneNumber: "9567890",
      hiringPrice: 1099,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Olivia Anderson",
      address: "Highland Avenue",
      phoneNumber: "9678901",
      hiringPrice: 799,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "William Brown",
      address: "Hillside Drive",
      phoneNumber: "9789012",
      hiringPrice: 899,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    },
    {
      name: "Ava Taylor",
      address: "Riverside",
      phoneNumber: "9890123",
      hiringPrice: 999,
      tutorProfileImagePath: "/assets/images/JokerProfileImage.jpg"
    }
  ];
  

  @Input()
  searchValue: string = "";


  

}
