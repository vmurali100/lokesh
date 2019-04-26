import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: Object;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getData().subscribe(response => {
      console.log(response);
      this.users = response;
    });
  }

  userNames: any[];
}
