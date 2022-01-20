import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpService } from './services/http.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let httpService = this.injector.get( HttpService)
    let updateReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    return next.handle(updateReq)
  }
}