import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-library-list-items',
  templateUrl: './library-list-items.component.html',
  styleUrls: ['./library-list-items.component.scss']
})
export class LibraryListItemsComponent implements OnInit {

  public libraryItems = [];

  constructor(private _libraryService: LibraryService) { }

  ngOnInit() {
    this.getLibraryItems();
    console.log(this.libraryItems);
  }

  getLibraryItems() {
    this._libraryService.getLibraryItems()
    .subscribe(data => this.libraryItems = data);
  }


}
