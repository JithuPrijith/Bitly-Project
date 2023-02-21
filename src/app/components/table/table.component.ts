import {Component} from '@angular/core';

export interface PeriodicElement {

  position: number;
  del:string
  shortlink: string;
  link:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, link:"ggggggggg",shortlink: 'H', del:"delete"},
  {position: 2,  link:"ggggggggg",shortlink: 'He',del:"delete"},
  {position: 3, link:"ggggggggg",shortlink: 'Li',del:"delete"},
  {position: 4,   link:"ggggggggg",shortlink: 'Be',del:"delete"},

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['position',  'link','shortlink',"del"];
  dataSource = ELEMENT_DATA;
}

