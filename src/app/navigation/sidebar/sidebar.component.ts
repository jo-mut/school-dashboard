import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private aria_expanded: boolean = false;

  constructor(private element: ElementRef) { }

  ngOnInit() {

  }


  getAriaExpansion() {
    
  }


 
}
