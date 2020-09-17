import { Component, OnInit } from '@angular/core';
import { CovidServiceService} from '../covid-service.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})

export class StateComponent implements OnInit {

  public stateDetails: [];
  public stateDetailsArray: object[];
  public arr: object[] = [];
  public recoveredCases:number[]= [];
  public activeCases:number[]= [];
  public deaths:number[]= [];
  public confirmedCases:number[]= [];
  public states= [];

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
 
 
  constructor(public service:CovidServiceService,public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(){

    this.service.getData().subscribe(
      data=>{
         
         this.stateDetails = data['statewise'];
        //  for(let element in this.stateDetails ){

        // this.stateDetailsArray= [
        //  {
        //   "name": "State",
        //   "value": this.stateDetails[element]['state']

        //  },
        //  {
        //   "name": "Active",
        //   "value":this.stateDetails[element]['active']
        //  },
        //  {
        //   "name": "Recovered",
        //   "value":this.stateDetails[element]['recovered']
        //  },
        //  {
        //   "name": "Confirmed",
        //   "value":this.stateDetails[element]['confirmed']
        //  },
        //  {
        //   "name": "Deaths",
        //   "value":this.stateDetails[element]['deaths']
        //  }
        // ]
        // this.arr.push(this.stateDetailsArray);
        // }

        //  for(let element in this.stateDetails ){

        //    this.states.push(this.stateDetails[element]['state']);
        //  }
        //  for(let element in this.stateDetails ){

        //   this.deaths.push(this.stateDetails[element]['deaths']);
        // }
        // for(let element in this.stateDetails ){

        //   this.confirmedCases.push(this.stateDetails[element]['confirmed']);
        // }
        // for(let element in this.stateDetails ){

        //   this.recoveredCases.push(this.stateDetails[element]['recovered']);
        // }
        // for(let element in this.stateDetails ){

        //   this.activeCases.push(this.stateDetails[element]['active']);
        // }
         console.log(this.stateDetails);
        //  for(let stateArray of this.arr){
        //   console.log(stateArray);

        //  }
        //  console.log(this.arr);
        //  console.log(this.states);
        //  console.log(this.recoveredCases);
        //  console.log(this.deaths);
        //  console.log(this.confirmedCases);
        //  console.log(this.activeCases);


      },

      error=>{

         console.log(error.errorMessage);

      }
    )
  

}
}