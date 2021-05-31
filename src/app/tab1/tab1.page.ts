import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Biketours, Tourism, Event} from '../types';
import { BiketourService } from '../services/biketour.service';
import { TourismService } from '../services/tourism.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //Property to hold all the data that will be consumed by our service
  biketourList: Observable<Biketours[]>;

  tourismList: Observable<Tourism[]>;

  eventList: Observable<Event[]>;


  constructor(
    biketourService: BiketourService,
    tourismService: TourismService,
    eventService: EventService) {

    this.biketourList = biketourService.getAllBiketours();

    this.tourismList = tourismService.getAllTourism();

    this.eventList = eventService.getAllEvents();

  }

  

}
