import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events-planner/event-list/event-list.component';
import { EventDetailsComponent } from './events-planner/event-details/event-details.component';
import { NewEventComponent } from './events-planner/new-event/new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
