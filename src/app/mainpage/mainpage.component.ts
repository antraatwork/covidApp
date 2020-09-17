import { Component, OnInit } from '@angular/core';
import { CovidServiceService} from '../covid-service.service';
import { ActivatedRoute, Router } from "@angular/router";

// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {

  public todayCasesDetails: object;
  public casesDailyDetails:any[];
  public displayDetails: object;
  public updatedDate: string;
  public todayCasesDetailsArray: object[] =[];
  public todayCasesDetailsArrays= [];

  // states
  public states:string[]=[];
  public stateDetails: object;

  // options for the chart
  view: any[] = [800, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showLegendLabel = 'Covid';
  showXAxisLabel = true;
  // xAxisLabel = 'Country';
  showYAxisLabel = true;
  // yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  //pie
  showLabels = true;




  constructor(public service:CovidServiceService,public router:Router) { }

  ngOnInit(){

    this.service.getData()
    .subscribe(
      data=>{
         this.casesDailyDetails = data['cases_time_series'];
         this.todayCasesDetails = data['cases_time_series'].pop();
         this.updatedDate = this.todayCasesDetails['date'];
         delete this.todayCasesDetails['date'];
         this.stateDetails = data['statewise'];
         for(let element in this.stateDetails ){

           this.states.push(this.stateDetails[element]['state']);
         }
         this.todayCasesDetailsArray =
         [
           {
            "name": "Daily confirmed",
            "value":this.todayCasesDetails['dailyconfirmed']
           },
           {
            "name": "Daily deceased",
            "value":this.todayCasesDetails['dailydeceased']
           },
           {
            "name": "Daily recovered",
            "value":this.todayCasesDetails['dailyrecovered']
           },
           {
            "name": "Total confirmed",
            "value":this.todayCasesDetails['totalconfirmed']
           },
           {
            "name": "Total deceased",
            "value":this.todayCasesDetails['totaldeceased']
           },
          {
            "name": "Total recovered",
            "value":this.todayCasesDetails['totalrecovered']
          }

         ]
         console.log(this.todayCasesDetails);
         console.log(this.todayCasesDetailsArray);
        
      },
      error=>{
        console.log(error.errorMessage);
      }
      );
    
  }



  // change state
  public changeState(){

    this.router.navigate(['/state']);

  }

}