import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>()
  term:string;

  constructor() { }

  ngOnInit() {
  }
  onFormSubmit(event:any){
    event.preventDefault()
    console.log(this.term)
    this.submitted.emit(this.term) 
  }
}
