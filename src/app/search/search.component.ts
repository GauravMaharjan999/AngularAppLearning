import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    searchValue: string = "tutor"; 

    @Output()
    searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
    onSearchTextChanged(){
      this.searchTextChanged.emit(this.searchValue);
    }



}
