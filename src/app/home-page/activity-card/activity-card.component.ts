import { Component, Input, OnInit } from '@angular/core';
import { IActivity } from '../../models/activity';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styles: []
})
export class ActivityCardComponent implements OnInit {

  @Input() activity: IActivity;

  constructor() { }

  ngOnInit(): void {

  }

}
