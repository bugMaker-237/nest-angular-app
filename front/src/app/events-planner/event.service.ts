import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EventDto } from "./event-dto";

@Injectable()
export class EventService {
	// TODO: Inser this in a config file
	private baseUri = 'http://localhost:3000';
	constructor(private httpClient: HttpClient) {
	}
	getEvents(numberOfResults: number = 100, offset = 0, searchCriteria = null) {
		return this.httpClient.get<{totalCount: number, data:EventDto[]}>(`
		${this.baseUri}/events?numberOfResults=${numberOfResults}&offset=${offset}&searchCriteria=${searchCriteria}`
		);
	}

	createEvent(event: EventDto) {
		return this.httpClient.post(`${this.baseUri}/events`, event);
	}

}
