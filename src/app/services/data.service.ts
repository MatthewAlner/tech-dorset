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
    hosts.push({name: 'Matt', imageURL: 'assets/hosts/matt.jpg'});
    hosts.push({name: 'Chris', imageURL: 'assets/hosts/default.svg'});
    hosts.push({name: 'Tom', imageURL: 'assets/hosts/default.svg'});
    hosts.push({name: 'Dave', imageURL: 'assets/hosts/default.svg'});
    hosts.push({name: 'Alex', imageURL: 'assets/hosts/default.svg'});
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
