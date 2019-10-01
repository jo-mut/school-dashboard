import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  public path: string = '';

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.url.subscribe(data => {
      console.log(data);
    })
  }


  getComponent() {
   
  }

}
