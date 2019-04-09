import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}
  getuser() {
    this._http
      .get("http://www.filltext.com/?rows=5&fname={firstName}&pretty=true")
      .subscribe(data => {
        console.log(data);
      });
  }
}
