import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit{

  searchInput: string = "";
  result!: string | null

  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return
    }
    console.log(form.value.searchInput);
    
    this.result = "data comes"
    
  }

}
