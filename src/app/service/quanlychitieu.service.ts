import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuanlychitieuService {
 apiUrl="http://localhost:3000/master";
  constructor(private http: HttpClient) { }  

  taoQuanLiChiTieu(data:any)
  {
   return this.http.post(this.apiUrl,data);
  }
}
