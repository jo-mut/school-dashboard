import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  isMobileMenu(): boolean {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
