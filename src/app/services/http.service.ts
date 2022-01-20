import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private API_URL = 'http://localhost:5000/api/url';
  
  constructor( private _http: HttpClient,  private _router: Router) { }

  public postShortUrl(longUrl: string): Observable<string> {
    return this._http.post<any>(`${this.API_URL}/shorten`, {longUrl})
  }

  // public loginUser(user: IRequestData): Observable<IAccessData> {
  //   return this._http.post<IAccessData>(`${this.API_URL}/login`, user)
  // }
}
