import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  
@Input() recieveDataFromParent;
  constructor() { }
  ngOnInit() {
  }

  recievedinfo(updated){
    this.recieveDataFromParent = updated;
  }

}
