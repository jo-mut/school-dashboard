import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
  
  public departments = [];

  constructor(private _departmentSerivice: DepartmentsService) { }

  ngOnInit() {
    this.getDepartments();
    console.log(this.departments);
  }

  getDepartments() {
    this._departmentSerivice.getDepartments()
    .subscribe(data => this.departments = data);
  }

}
