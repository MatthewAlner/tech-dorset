import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animated-title',
  templateUrl: './animated-title.component.html',
  styles: []
})
export class AnimatedTitleComponent implements OnInit {

  public options: AnimationOptions;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      path: 'assets/animations/tech-dorset.json',
      loop: false
    };
  }

}
