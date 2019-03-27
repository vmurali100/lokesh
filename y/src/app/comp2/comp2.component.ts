import { Component, OnInit, Input } from '@angular/core';
import { ReflectiveDependency } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Input() Recievedd;
  constructor() { }

  ngOnInit() {
  }

}
