import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {

  position: number;
  del:string
  shortlink: string;
  link:string;
}


/**
 *  Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit{
  displayedColumns: string[] = ['position',  'link','shortlink',"del"];
  dataSource!:any;

  constructor(public http: HttpClient){}

  ngOnInit(): void {
    this.getUrl();
  }

  getUrl(){
    this.http.get("http://localhost:3000/api/get-url")
    .subscribe((result:any) => {
      this.dataSource = result.urlData
    })
  }

  onDelete(id:string){
    // console.log(id);
   return this.http.delete(`http://localhost:3000/api/delete/${id}`)
    .subscribe((result:any) => {
      this.dataSource = result.urlData
        // console.log(result);
 })
  }

}

