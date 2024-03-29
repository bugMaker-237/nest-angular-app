import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events-planner/event-list/event-list.component';
import { NewEventComponent } from './events-planner/new-event/new-event.component';

const routes: Routes = [{
	path: '',
	component: EventListComponent
}, {
	path: 'new',
	component: NewEventComponent
},{
	path: '**',
	redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
