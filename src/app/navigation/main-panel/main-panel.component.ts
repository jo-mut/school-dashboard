import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  public visibilityClass: string = "";

  constructor() { }

  ngOnInit() {
    this.hideShowSidebar()
  }

  isMobileMenu(): boolean {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  hideShowSidebar(){
    if(this.isMobileMenu()) {
      console.log("mobile menu")
      this.visibilityClass = "width: 0px";
    } else {
      console.log("not mobile menu")
      this.visibilityClass = "width: 260px";
    }
  }

}
