import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
  passData;
  dataTrans: { "fname": string; "lname": string; "tel": string; "address": string; "city": string; "state": string; "zip": number; }[];
  dataFromParent: any;
  constructor() { }

  ngOnInit() {
  }

  reciveData(data){
      this.dataFromParent = data;
  }
}
