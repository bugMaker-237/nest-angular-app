import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events-planner/event-list/event-list.component';
import { NewEventComponent } from './events-planner/new-event/new-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EventService } from './events-planner/event.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
		MatListModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatIconModule,
		MatToolbarModule,
    AppRoutingModule,
		MatButtonModule,
		HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
