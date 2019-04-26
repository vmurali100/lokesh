import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  selectedUser: any;
  constructor(private acticatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.acticatedRoute.params.subscribe(response => {
      this.selectedUser = response;
    });
  }
}
