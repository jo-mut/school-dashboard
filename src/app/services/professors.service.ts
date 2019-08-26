import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from '../models/professor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  public _url = "assets/data/professors.json";

  constructor(private _httpClient: HttpClient) { }

  public getProfessors(): Observable<[Professor]>{
    return this._httpClient.get<[Professor]>(this._url);
  } 
}
