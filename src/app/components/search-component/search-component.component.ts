import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { SearchService } from './search.service';
@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit{

  searchInput: string = "";
  result: string | null ='';
  form!: FormGroup;
  // private linkId!: string;

  constructor(public SearchService:SearchService){}

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return
    }else{
      const text=form.value.searchInput;
       fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
       .then((res)=>{
         return res.json();
       })
       .then((data)=>{
        this.result= data.result.short_link;
        this.SearchService.addContent(
         text,
         this.result,

         )
      })
    }

    }
}









