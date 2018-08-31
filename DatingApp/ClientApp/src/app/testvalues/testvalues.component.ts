import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testvalues',
  templateUrl: './testvalues.component.html',
  styleUrls: ['./testvalues.component.css']
})
/** testvalues component*/
export class TestvaluesComponent implements OnInit {


  values: any;

  /** testvalues ctor */
  constructor(private http: HttpClient) {

  }


  ngOnInit() {
    this.getValues();
  }


  getValues() {

    this.http.get("http://localhost:15406/api/SampleData/WeatherForecasts")
      .subscribe(response => { this.values = response },
        error => { console.log(error); }
      );

  }


}
