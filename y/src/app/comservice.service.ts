import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComserviceService {
  passInfo = new Subject;
  constructor() { }
  showInfo(info){
    this.passInfo.next(info)
  }
}
