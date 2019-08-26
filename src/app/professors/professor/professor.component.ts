import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../../models/professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  @Input() professor: Professor;

  constructor() { }

  ngOnInit() {
  }

}
