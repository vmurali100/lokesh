import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: any;
  userNames: any[];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.userNames = [];

    this.users = this.commonService.getUsers();
    if (this.users == undefined) {
      this.commonService.getData().subscribe(res => {
        this.users = res;
        this.commonService.setUsers(this.users);
        this.users.map(user => {
          this.userNames.push(user.username);
        });
      });
    } else {
      console.log(this.users);
      this.users.map(user => {
        this.userNames.push(user.username);
      });
    }
  }
}
