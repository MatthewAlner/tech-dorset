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
    activity.push({colour: 'green', icon: 'faChalkboardTeacher', title: 'Talks', description: 'we have talks'});
    activity.push({colour: 'red', icon: 'faPizzaSlice', title: 'Pizza', description: 'we have pizza'});
    activity.push({colour: 'blue', icon: 'faProjectDiagram', title: 'Networking', description: 'we have networking'});
    return activity;
  }
}
