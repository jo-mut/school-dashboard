import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  public _url = "assets/data/workers.json";

  constructor(private _httpClient: HttpClient) { }

  public getWorkers(): Observable<[Worker]>{
    return this._httpClient.get<[Worker]>(this._url);
  } 
}
