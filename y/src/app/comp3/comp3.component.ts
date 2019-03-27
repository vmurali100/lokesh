import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit() {
    console.log("Helo")
    this.commonService.sendData.subscribe((data)=>{
      console.log(data)
    })
  }

}
