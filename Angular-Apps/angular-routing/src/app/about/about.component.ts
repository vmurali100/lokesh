import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  data: any;
  companies = [];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.data = this.commonService.getUsers();
    if (this.data == undefined) {
      this.commonService.getData().subscribe(res => {
        this.data = res;
        for (let obj of this.data) {
          this.companies.push(obj.company);
        }
      });
    } else {
      for (let obj of this.data) {
        this.companies.push(obj.company);
      }
    }

    console.log(this.companies);
  }
}
