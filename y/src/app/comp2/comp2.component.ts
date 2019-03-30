import { Component, OnInit, Input } from '@angular/core';
import { ReflectiveDependency } from '@angular/core/src/di/reflective_provider';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Input() Recievedd;

  constructor(public commonService :CommonService) { }

  ngOnInit() {
    
  }
  
}
