import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class IncidentService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get('http://localhost:8080/incident/incidents');
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : (error.status ? `${error.status} - ${error.statusText}` : 'Server error');
    console.error(errMsg);
    return Observable.throw(errMsg);
}
}
