import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
  dataFromJson: { "fname": string; "lname": string; "tel": string; "address": string; "city": string; "state": string; "zip": number; }[];
  sendData: any;
  constructor() { }

  ngOnInit() {
    this.dataFromJson = users;
  }
  edit(user){
    this.sendData = user;
  }


}
const users = [
  {
      "fname": "Leopoldo",
      "lname": "Vinsant",
      "tel": "(932)903-4256",
      "address": "283 Curabitur Ave",
      "city": "Kitchener",
      "state": "MD",
      "zip": 68680
  },
  {
      "fname": "Latonya",
      "lname": "Givens",
      "tel": "(888)259-9073",
      "address": "7833 Tortor Ct",
      "city": "Shinnston",
      "state": "TX",
      "zip": 51481
  },
  {
      "fname": "Josephine",
      "lname": "Vasquez",
      "tel": "(949)255-7742",
      "address": "3776 Odio Ct",
      "city": "Westminster",
      "state": "NY",
      "zip": 95729
  },
  {
      "fname": "Anita",
      "lname": "Clark",
      "tel": "(903)559-8794",
      "address": "427 Rutrum Ct",
      "city": "Camden",
      "state": "RI",
      "zip": 39048
  },
  {
      "fname": "Roger",
      "lname": "Wolz",
      "tel": "(634)355-8404",
      "address": "1191 Vitae Rd",
      "city": "Pond Eddy",
      "state": "NH",
      "zip": 29514
  }
]


