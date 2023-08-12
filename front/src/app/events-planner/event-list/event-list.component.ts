import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Observable, map, Subject } from 'rxjs';
import { EventDto } from '../event-dto';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit{
	events = new Subject<EventDto[]>;
	eventsTotalCount = new Subject<number>;

	constructor(private readonly _eventService: EventService) {
	}
	ngOnInit(): void {
		this._eventService.getEvents().subscribe(_=>{
			console.log(_);
			this.events.next(_.data);
			this.eventsTotalCount.next(_.totalCount);
		});
	}
	openPage(){}

}
