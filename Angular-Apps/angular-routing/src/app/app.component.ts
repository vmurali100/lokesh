import { Component } from "@angular/core";
import { CommonService } from "./common.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private commonService: CommonService) {}
  title = "angular-routing";
  ngOnInit() {
    this.commonService.getData();
  }
}
