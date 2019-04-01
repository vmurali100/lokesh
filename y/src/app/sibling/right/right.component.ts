import { Component, OnInit } from '@angular/core';
import { ComserviceService } from 'src/app/comservice.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  userDetails: {};

  constructor(private comService:ComserviceService) { }

  ngOnInit() {
    this.comService.passInfo.subscribe(data=>this.userDetails=data)
  }

}
