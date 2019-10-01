import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MailComponent } from './mail/mail.component';
import { Router } from '@angular/router';

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

  get getId(): string {
    return this.id.toString();
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
  @Input() mail: Mail;


  constructor(private router: Router) {
    this.firstMail();

  }

  ngOnInit() {
  }

  private firstMail(){
    if (this.profileMails()[0] != null) {
      this.mail = this.profileMails()[0]
    }
  } 

  private mailDetail(mail: Mail) {
    if(mail != null) {
      this.router.navigateByUrl(mail.getId);
      this.mail = this.profileMails()[mail.getId];
      console.log(mail.getId)
    }
  }

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


}
