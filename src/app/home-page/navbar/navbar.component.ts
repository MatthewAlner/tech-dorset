import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  public showMenu = false;

  public toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

}
