import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHomePage(): boolean {
    return location.pathname == '/';
  }
  isActivePage(): boolean {
    return location.pathname == '/active';
  }
  isInactivePage(): boolean {
    return location.pathname == '/inactive';
  }
}
