import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data: { "fname": string; "lname": string; "tel": string; "address": string; "city": string; "state": string; "zip": number; }[];
  sendData;
  index;
  constructor() { }

  ngOnInit() {
    this.data = users;
  }

  edit(user,i){
    this.sendData = user;
    this.index = i;
  }
  receiveDetails(updated){
    this.data[this.index].fname = updated;
    
  }
}

const users = [
  {
      "fname": "Sheldon",
      "lname": "Shanafelt",
      "tel": "(939)368-7498",
      "address": "9561 Pharetra Ave",
      "city": "Roxboro",
      "state": "AR",
      "zip": 58699
  },
  {
      "fname": "Claudia",
      "lname": "Knight",
      "tel": "(144)973-5941",
      "address": "4222 Placerat Ln",
      "city": "Northern Ca",
      "state": "GA",
      "zip": 23232
  },
  {
      "fname": "Kassaundra",
      "lname": "Ruback",
      "tel": "(628)238-2431",
      "address": "1445 Eget Dr",
      "city": "Central Valley",
      "state": "AL",
      "zip": 32294
  },
  {
      "fname": "Dina",
      "lname": "Grimm",
      "tel": "(646)088-3374",
      "address": "970 Facilisis Ct",
      "city": "Tobyhanna",
      "state": "NC",
      "zip": 34576
  },
  {
      "fname": "Moses",
      "lname": "Gerela",
      "tel": "(696)821-7607",
      "address": "3724 Pulvinar Ave",
      "city": "Berkeley",
      "state": "TX",
      "zip": 11921
  }
]