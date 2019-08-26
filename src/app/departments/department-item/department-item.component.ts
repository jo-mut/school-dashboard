import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../../models/department';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent implements OnInit {

  @Input() department: Department

  constructor() { }

  ngOnInit() {
  }

}
