import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  toggle: boolean = false;
  toggleTouched: boolean = false;
  toggleMenu() {
    this.toggleTouched = true;
    this.toggle = !this.toggle;

    document.body.style.overflow = 'hidden'

    if(!this.toggle){
      document.body.style.removeProperty("overflow")
    }
  }
}
