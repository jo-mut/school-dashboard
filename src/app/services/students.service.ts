import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public _url = "assets/data/students.json";

  constructor(private _httpClient: HttpClient) { }

  public getStudents(): Observable<[Student]>{
    return this._httpClient.get<[Student]>(this._url);
  } 
}
