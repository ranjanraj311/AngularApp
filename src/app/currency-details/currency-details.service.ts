import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurrencyDetailsService {

  constructor(private httpClient: HttpClient) { }

  getCurrencyDetails(): Observable<any> {
    return this.httpClient.get(environment.baseURL);
  }
}
