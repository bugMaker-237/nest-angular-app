import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {
	formGroup = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(32)]),
		description: new FormControl('', [Validators.required]),
		startDate: new FormControl(null, [Validators.required]),
		endDate: new FormControl(null, [Validators.required]),
	});

	constructor(private readonly _eventService: EventService, private readonly _router: Router){}

	submit(){
		if(!this.formGroup.valid) return;

		const value =  this.formGroup.value;
		this._eventService.createEvent({
			description: value.description!,
			endDate: value.endDate!,
			startDate: value.startDate!,
			name: value.name!
		}).subscribe({
			next: val=>{
				this._router.navigate(['/'])
			}, 
			error: err=>{
				console.log(err);
			}
		})
	}
}
