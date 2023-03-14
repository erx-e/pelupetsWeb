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


  toggleSubMenu(event?: Event, open?: boolean) {
    if(event){
      let subElementToggle = event.currentTarget as HTMLElement;
      if(!open) {
        let toggleList = subElementToggle.nextElementSibling as HTMLElement
        toggleList.style.display = "block";
      }
      else {
        let toggleList = document.querySelector(".subToggle-container") as HTMLElement;
        toggleList.style.display = "none";
      }
    }
    else {
      let toggleList = document.querySelector(".subToggle-container") as HTMLElement;
      toggleList.style.display = "none";
    }
  }
}
