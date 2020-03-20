import { Component, Input, OnInit } from '@angular/core';
import { IHost } from '../../models/host';

@Component({
  selector: 'app-host-card',
  templateUrl: './host-card.component.html',
  styles: []
})
export class HostCardComponent implements OnInit {

  @Input() host: IHost;
  constructor() { }

  ngOnInit(): void {
  }

}
