import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChildCompComponent } from "./child-comp/child-comp.component";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  constructor() {}
  @ViewChild("heading") localHeading: any;
  @ViewChild(ChildCompComponent) myChild;
  ngOnInit() {}

  changeColor() {
    this.localHeading.nativeElement.setAttribute("style", "color:red");
    this.myChild.changeChildHeading();
  }
}
