import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllActive(): Observable<any> {
    return this.http.get(`${environment.INVENTORY_BASE_URL}/categories/active`);
  }
}
