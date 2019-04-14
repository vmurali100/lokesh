import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-child-comp",
  templateUrl: "./child-comp.component.html",
  styleUrls: ["./child-comp.component.css"]
})
export class ChildCompComponent implements OnInit {
  @ViewChild("childHeading") myChildEle: ElementRef;
  constructor() {}

  ngOnInit() {}

  changeChildHeading() {
    this.myChildEle.nativeElement.setAttribute("style", "color:blue");
  }
}
