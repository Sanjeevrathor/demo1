import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Authmodule } from './authmodule';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl="http://localhost:3000/user"

  constructor(private http:HttpClient) { }
   
  registPost(post):Observable<Authmodule>{
   return this.http.post<Authmodule>(this.apiUrl, post)
  }
  
  userLogin():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
