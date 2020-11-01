import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let httpsReq = req;
        if (window.location.href.indexOf('administrator') != -1) {
            httpsReq = req.clone( {
                    url : req.url + "?UserID=" + (localStorage.getItem("User") || "")
                })
        }
        return next.handle(httpsReq);
    }
}
