import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../models/activity';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-what-section',
  templateUrl: './what-section.component.html',
  styles: []
})
export class WhatSectionComponent implements OnInit {

  activities: IActivity[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.activities = this.dataService.getActivities();
  }

}
