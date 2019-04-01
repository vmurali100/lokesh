import { Component, OnInit } from '@angular/core';
import { ComserviceService } from 'src/app/comservice.service';
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  users: { "_id": string; "index": number; "guid": string; "isActive": boolean; "balance": string; "picture": string; }[];
  index: any;

  constructor(private comService:ComserviceService) { }

  ngOnInit() {
    this.users = users;
  }
  edit(obj,i){
    this.index=i;
    this.comService.showInfo(obj)
  }
}

const users = [
  {
    "_id": "5ca21a1b35193b33c56b7ced",
    "index": 0,
    "guid": "0aee2064-d8d9-4d13-b76f-f2ce198bb100",
    "isActive": false,
    "balance": "$2,195.23",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "5ca21a1b2a328d70df50da57",
    "index": 1,
    "guid": "b9d86aa8-28bb-4beb-8183-bdfe9597adaa",
    "isActive": false,
    "balance": "$3,690.63",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "5ca21a1bcca07e1054b0203e",
    "index": 2,
    "guid": "8ae068e8-5577-4a55-8efc-0a387bba7fc1",
    "isActive": false,
    "balance": "$2,672.67",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "5ca21a1b933a600229f4b27e",
    "index": 3,
    "guid": "59d09f55-3f46-4bf0-bcdf-342ef1695fb2",
    "isActive": false,
    "balance": "$3,939.81",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "5ca21a1b53f441124c8d62e4",
    "index": 4,
    "guid": "2b2a4940-1533-4bcf-9ee1-cef1cb657162",
    "isActive": true,
    "balance": "$1,556.86",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "5ca21a1bd73d2ba2d604405a",
    "index": 5,
    "guid": "726a897e-e75a-4abe-91bd-1ab48ea6512c",
    "isActive": false,
    "balance": "$2,427.74",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "5ca21a1beefaa46c39075f4e",
    "index": 6,
    "guid": "e22768b9-c5ca-4b09-b1a1-de4f82a1e4b4",
    "isActive": true,
    "balance": "$2,098.26",
    "picture": "http://placehold.it/32x32"
  }
]