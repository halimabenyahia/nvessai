import { CanActivate } from '@angular/router';

export class ConnectGuard implements CanActivate{
    canActivate(
        route: import("@angular/router").ActivatedRouteSnapshot, 
        state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> 
        {
        const token = localStorage.getItem('token');
        return !(token);
        }
    
}