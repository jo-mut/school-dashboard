import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class Notification {
  constructor(
    private id: number,
    private image: string,
    private text: string,
    private seen: boolean) {

  }    
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private hidden: boolean = false
  private lorem: string = `Lorem ipsum dolor sit amet?`;
  private profileImage = "assets/images/img.jpg";


  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public notificationData(): Array<Notification> {
    const notifications: Array<Notification> = new Array<Notification>(
      new Notification(1, 'assets/images/img.jpg', this.lorem, true),
      new Notification(2, 'assets/images/img.jpg', this.lorem, true),
      new Notification(3, 'assets/images/img.jpg', this.lorem, true),
      new Notification(4, 'assets/images/img.jpg', this.lorem, true),
      new Notification(5, 'assets/images/img.jpg', this.lorem, true),
      new Notification(6, 'assets/images/img.jpg', this.lorem, true),
      new Notification(7, 'assets/images/img.jpg', this.lorem, true),
      new Notification(8, 'assets/images/img.jpg', this.lorem, true),
      new Notification(9, 'assets/images/img.jpg', this.lorem, true),
    )

    return notifications.slice(0, 3);
  }

  showHideSidebar() {
    if (this.hidden) {
      this.hidden = false;
    }else {
      this.hidden = true;
    }
  }

  logout() {
    this.router.navigateByUrl('/sign-in')
  }

 
}
