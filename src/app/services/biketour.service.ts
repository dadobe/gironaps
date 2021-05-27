import { Injectable } from '@angular/core';

//Import to inject HttpClient ActivityService
//Feature that allows to interact with rest apis
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Biketours } from '../types';

@Injectable({
  providedIn: 'root'
})
export class BiketourService {

  constructor(private _httpClient: HttpClient) { }

  //Method to fetch a particular activity (passed as parameter by an ID as number)
  getBiketour(biketourID: number): Observable<Biketours>{
    // the <Biketours> after the get method is to ensure to return the correct data types
    return this._httpClient.get<Biketours>(API + "/" + biketourID);

  }

  //Method to fetch all the available activities
  getAllBiketours(): Observable<Biketours[]>{

    // the <Biketours> after the get method is to ensure to return the correct data types
    return this._httpClient.get<Biketours[]>(API);

  }
}

//url of api created in HEROKU
const API = "https://bike-tours-api.herokuapp.com/bikeTours";