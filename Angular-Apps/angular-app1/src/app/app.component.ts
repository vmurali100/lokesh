import { Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-app1";
  users;
  fromParent: any = [];
  constructor(private commonService: CommonService) {}

  getUsers() {
    console.log(this.users);
    this.commonService.getuser(this.users).subscribe(res => {
      console.log(res);
      this.fromParent = res;
    });
  }
}
