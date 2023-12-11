import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ELearningApp';
  searchValue: string = ""; 

  setSearchText(value: string){
    this.searchValue = value;

  }
}
