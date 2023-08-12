import { Event } from '@domain/entities/event';

export class GetEventsResponseItem {
  constructor(event: Event) {
    this.name = event.name;
    this.id = event.id;
    this.startDate = event.startDate;
    this.endDate = event.endDate;
    this.description = event.description;
    this.createdDate = event.createdDate;
  }
  createdDate: Date;
  endDate: Date;
  startDate: Date;
  id: string;
  name: string;
  description: string;
}
