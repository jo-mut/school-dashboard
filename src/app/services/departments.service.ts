import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  public _url = "assets/data/departments.json";

  constructor(private _httpClient: HttpClient) { }

  public getDepartments(): Observable<[Department]>{
    return this._httpClient.get<[Department]>(this._url);
  }
}
