import { Event } from '@domain/entities/event';

export class AddEventResponse {
  constructor(event: Event) {
    this.name = event.name;
    this.id = event.id;
    this.startDate = event.startDate;
    this.enDate = event.endDate;
    this.description = event.description;
    this.createdDate = event.createdDate;
  }
  createdDate: Date;
  enDate: Date;
  startDate: Date;
  id: string;
  name: string;
  description: string;
}
