import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  public students = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this._studentsService.getStudents()
    .subscribe(data => this.students = data);
  }

}
