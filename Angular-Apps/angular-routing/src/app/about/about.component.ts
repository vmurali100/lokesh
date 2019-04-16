import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    console.log(this.commonService.getUsers());
    this.commonService.getUsers();
  }
}
