import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  authEmitter : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
