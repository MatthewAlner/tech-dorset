import { Component, Input, OnInit } from '@angular/core';
import { IHost } from '../../models/host';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

@Component({
  selector: 'app-host-card',
  templateUrl: './host-card.component.html',
  styles: []
})
export class HostCardComponent implements OnInit {

  public icons = {
    faTwitter
  };

  @Input() host: IHost;
  constructor() { }

  ngOnInit(): void {
  }

}
