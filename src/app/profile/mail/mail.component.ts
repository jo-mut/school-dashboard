import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Mail } from '../profile.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  @Input() mail: Mail;

  constructor() { }

  ngOnInit() {

  }

}
