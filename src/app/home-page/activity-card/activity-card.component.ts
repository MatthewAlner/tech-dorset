import { Component, Input, OnInit } from '@angular/core';
import { IActivity } from '../../models/activity';
import { faChalkboardTeacher, faPizzaSlice, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styles: []
})
export class ActivityCardComponent implements OnInit {

  public icons = {
    faPizzaSlice,
    faChalkboardTeacher,
    faProjectDiagram
  };

  @Input() activity: IActivity;

  constructor() {
  }

  ngOnInit(): void {

  }

}
