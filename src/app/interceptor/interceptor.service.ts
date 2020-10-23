import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let requestReturn: HttpRequest<any>;

    if (!req.url.startsWith('http')) {
      requestReturn = req.clone({ url: environment.urlBackend + req.url });
    } else {
      requestReturn = req.clone({ url: req.url });
    }

    return next.handle(requestReturn);
  }
}
