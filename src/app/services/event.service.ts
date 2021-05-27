//Import to inject HttpClient EventService
//Feature that allows to interact with rest apis
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from '../types';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _httpClient3: HttpClient) { }

  //Method to fetch a particular activity (passed as parameter by an ID as number)
  getEvent(eventID: number): Observable<Event>{
    // the <Event> after the get method is to ensure to return the correct data types
    return this._httpClient3.get<Event>(API_EVT + "/" + eventID);

  }

  //Method to fetch all the available activities
  getAllEvents(): Observable<Event[]>{

    // the <Event> after the get method is to ensure to return the correct data types
    return this._httpClient3.get<Event[]>(API_EVT);

  }
}

//url of api created in HEROKU
const API_EVT = "https://event-api-project.herokuapp.com/event";
