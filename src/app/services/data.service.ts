import { Injectable } from '@angular/core';
import { IHost } from '../models/host';

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
}
