import { HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(
        req: import("@angular/common/http").HttpRequest<any>,
        next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> 
        {
        //console.log("interceptor");
         const token = localStorage.getItem('token');
         if (token){
            const chaine = `Bearer ${token}`;
            const headers = new HttpHeaders().append(
                'Authorization' , chaine
            ) ;
            const newReq = req.clone({headers});
            return next.handle(newReq) ;
         }
         return next.handle(req);
         
          

         
        }


}

export const loginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS ,
    useClass : JwtInterceptor ,
    multi : true 
};