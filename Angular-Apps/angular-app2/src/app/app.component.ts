import { Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  countryDetails: any;
  cities: any;
  constructor(private commonService: CommonService) {}
  countries;
  states;
  title = "angular-app2";
  ngOnInit() {
    this.commonService.getData().subscribe(res => {
      this.countries = res;
    });
  }
  getCountryInfo(con) {
    this.countries.map(country => {
      if (country.name == con) {
        console.log(country);
        this.countryDetails = country.states;
        this.states = Object.keys(country.states);
      }
    });
  }

  getDistricts(stateName) {
    Object.keys(this.countryDetails).map(state => {
      if (state == stateName) {
        this.cities = this.countryDetails[state];
      }
    });
  }
}
