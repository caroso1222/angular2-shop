
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { DATA } from './mock-data';





@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(): Promise<any>{
    return Promise.resolve(DATA)
  }

  getRemoteData(url): Observable<any>{
    return this.http.get(url).pipe(
                    map(this.extractData),
                    catchError(this.handleError),);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return observableThrowError(errMsg);
  }

}
