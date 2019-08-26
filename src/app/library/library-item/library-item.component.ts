import { Component, OnInit, Input } from '@angular/core';
import { LibraryItem } from '../../models/library';

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.scss']
})
export class LibraryItemComponent implements OnInit {

  @Input()  libraryItem: LibraryItem;

  constructor() { }

  ngOnInit() {
  }

}
