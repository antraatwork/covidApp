import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  constructor(public _http:HttpClient) { 
  }

  private baseurl  = 'https://api.covid19india.org';

  public getData(){
    
    return this._http.get(this.baseurl + '/data.json').pipe(
      map( data =>{
        console.log(data);
        return data;
      }),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  public state(){

  }
}
