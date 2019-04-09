import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}
  getuser(nos) {
    return this._http.get(
      `http://www.filltext.com/?rows=${nos}&fname={firstName}&pretty=true`
      // "http://www.filltext.com/?rows=5&fname={firstName}&pretty=true"
    );
  }
}
