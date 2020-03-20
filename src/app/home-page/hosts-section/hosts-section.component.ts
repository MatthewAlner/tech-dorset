import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IHost } from '../../models/host';

@Component({
  selector: 'app-hosts-section',
  templateUrl: './hosts-section.component.html',
  styles: []
})
export class HostsSectionComponent implements OnInit {

  public hosts: IHost[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.hosts = this.dataService.getHosts();
  }

}
