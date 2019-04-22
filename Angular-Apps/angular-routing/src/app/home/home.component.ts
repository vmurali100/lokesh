import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService) {}
  title = "angular-routing";
  ngOnInit() {
    this.commonService.getData().subscribe(res => {
      console.log(res);
    });
  }

}
