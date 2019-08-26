import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from '../../services/professors.service';

@Component({
  selector: 'app-professors-list',
  templateUrl: './professors-list.component.html',
  styleUrls: ['./professors-list.component.scss']
})
export class ProfessorsListComponent implements OnInit {

  public professors = [];

  constructor(private _professorsService: ProfessorsService) { }

  ngOnInit() {
    this.getProfessors();
  }

  getProfessors() {
    this._professorsService.getProfessors()
    .subscribe(data => this.professors = data);
  }

}
