import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  data;
  userInfo = [];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.data = this.commonService.getUsers();
    if (this.data == undefined) {
      this.commonService.getData().subscribe(res => {
        this.data = res;
        console.log(this.data);

        this.showInfo(this.data);
        console.log(this.userInfo);
      });
    } else {
      this.showInfo(this.data);
    }
  }

  showInfo(data) {
    for (let obj of data) {
      let newObj = {};
      for (let prop in obj) {
        if (prop == "name" || prop == "email" || prop == "phone") {
          newObj[prop] = obj[prop];
        }
      }
      this.userInfo.push(newObj);
    }
  }
}
