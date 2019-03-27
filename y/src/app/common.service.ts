import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  sendData = new Subject()

  sendDetail(data){
    this.sendData.next(data)
  }
}
