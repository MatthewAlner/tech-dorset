import { Injectable } from '@angular/core';
import { IHost } from '../models/host';
import { IActivity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public getHosts() {
    const hosts: IHost[] = [];
    hosts.push({name: 'Matt'});
    hosts.push({name: 'Chris'});
    hosts.push({name: 'Tom'});
    hosts.push({name: 'Dave'});
    hosts.push({name: 'Alex'});
    return hosts;
  }

  public getActivities() {
    const activity: IActivity[] = [];
    activity.push({title: 'Talks', description: 'we have talks'});
    activity.push({title: 'Pizza', description: 'we have pizza'});
    activity.push({title: 'Networking', description: 'we have networking'});
    return activity;
  }
}
