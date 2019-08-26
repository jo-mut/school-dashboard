import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-workers-lists',
  templateUrl: './workers-lists.component.html',
  styleUrls: ['./workers-lists.component.scss']
})
export class WorkersListsComponent implements OnInit {

  public workers = [];

  constructor(private _workersService: WorkerService) { }

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers() {
    this._workersService.getWorkers()
    .subscribe(data => this.workers = data);
  }


}
