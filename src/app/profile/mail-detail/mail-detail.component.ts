import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../profile.component';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent implements OnInit {

  @Input() mail: Mail;


  constructor() { 

  }

  ngOnInit() {
  
  }

}
