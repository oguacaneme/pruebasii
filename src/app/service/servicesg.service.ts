import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesgService {

  constructor( private http: HttpClient) {

  }

  getemployees(): any  {
    return this.http.get('https://dummy.restapiexample.com/api/v1/employees');
  }


  getemployeid(id: number): any  {

    const url = 'https://dummy.restapiexample.com/api/v1/employee/'+ id
    return this.http.get(url);
  }




  }
