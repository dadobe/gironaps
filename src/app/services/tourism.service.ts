import { Injectable } from '@angular/core';

//Import to inject HttpClient TourismeSrvice
//Feature that allows to interact with rest apis
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Tourism } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  constructor(private _httpClient2: HttpClient) { }

  //Method to fetch a particular activity (passed as parameter by an ID as number)
  getTourism(tourismID: number): Observable<Tourism>{
    // the <Tourism> after the get method is to ensure to return the correct data types
    return this._httpClient2.get<Tourism>(API_Tourism + "/" + tourismID);

  }

  //Method to fetch all the available activities
  getAllTourism(): Observable<Tourism[]>{

    // the <Tourism> after the get method is to ensure to return the correct data types
    return this._httpClient2.get<Tourism[]>(API_Tourism);

  }
}

//url of api created in HEROKU
const API_Tourism = "https://tourism-api-project.herokuapp.com/tourism";
