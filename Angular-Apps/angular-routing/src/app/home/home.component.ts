<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
=======
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
>>>>>>> 48486e66274e8aca0cf6a609ffd172df5c4a0994

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  users: any;
  userNames: any[];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.userNames = [];
=======

  constructor(private commonService: CommonService) {}
  title = "angular-routing";
  ngOnInit() {
    this.commonService.getData().subscribe(res => {
      console.log(res);
    });
  }
>>>>>>> 48486e66274e8aca0cf6a609ffd172df5c4a0994

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
