import { Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-app1";
  constructor(private commonService: CommonService) {
    console.log(this.commonService.getuser());
  }
}
