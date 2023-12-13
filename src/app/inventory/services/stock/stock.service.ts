import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getAll(filters: any): Observable<any> {
    return this.http.get(`${environment.INVENTORY_BASE_URL}/stock`, {
      params: filters
    });
  }
}

