export class Event {
  constructor() {}
  public static create(
    name: string,
    description: string,
    startDate: Date,
    endDate: Date
  ): Event {
    const event = new Event();
    event.name = name;
    event.description = description;
    event.startDate = Event.getUTCDate(startDate);
    event.endDate = Event.getUTCDate(endDate);
    event.createdDate = Event.getUTCDate(startDate);

    return event;
  }

  public static getUTCDate(date: Date) {
    return new Date(
      Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
      )
    );
  }
  public id: string;
  public name: string;
  public description: string;
  public createdDate: Date;
  public startDate: Date;
  public endDate: Date;
}
