import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() recievedinfo ;
  @Output() sendInfo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  update(updated){
    this.sendInfo.emit(updated);
    this.recievedinfo = ''
  }
}
