import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(public http:HttpClient) { }
  public BaseUrl=environment.baseUrl;
  public login=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.BaseUrl+'Admin/LoginUserAdmin',obj);
  }
}
