import { Component, OnInit } from '@angular/core';

export class Mail {
  constructor(
    private id?: number,
    private sender?: Array<any>,
    private receipient?: string,
    private text?: string,
    private time?: string,
    private attachment?: string
  ) {

  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private lorem: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Incidunt quibusdam praesentium...`
  private time: number = Date.now();
  private profileImage = "assets/images/img.jpg";


  constructor() { }

  private profileMails(): Array<Mail> {
    const mails = new Array<Mail>(
      new Mail(1, ["assets/images/img.jpg", "John Doe"], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(2, ["assets/images/img.jpg", "John Doe" ], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(3, ["assets/images/img.jpg", "John Doe"], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(4, ["assets/images/img.jpg", "John Doe"], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(5, ["assets/images/img.jpg", "John Doe" ], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(6, ["assets/images/img.jpg", "John Doe"], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(7, ["assets/images/img.jpg", "John Doe"], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(8, ["assets/images/img.jpg", "John Doe" ], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(9, ["assets/images/img.jpg", "John Doe"], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(10, ["assets/images/img.jpg", "John Doe"], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(11, ["assets/images/img.jpg", "John Doe" ], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(12, ["assets/images/img.jpg", "John Doe" ], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),
      new Mail(13, ["assets/images/img.jpg", "John Doe" ], "James Hum", this.lorem, this.time.toString(), "assets/images/img.jpg"),

    )

    return mails;
  }

  private mailCount(): number {
    return this.profileMails().length;
  }

  ngOnInit() {
  }

}
