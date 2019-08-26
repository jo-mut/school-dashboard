import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryItem } from '../models/library';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  public _url = "assets/data/library.json";

  constructor(private _httpClient: HttpClient) { }

  public getLibraryItems(): Observable<[LibraryItem]>{
    return this._httpClient.get<[LibraryItem]>(this._url);
  } 

}
