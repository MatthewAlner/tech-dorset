import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';

@Component({
  selector: 'app-when-where-section',
  templateUrl: './when-where-section.component.html',
  styles: []
})
export class WhenWhereSectionComponent implements OnInit {

  public icons = {
    faMapMarkerAlt
  };

  constructor() { }

  ngOnInit(): void {
  }

}
