import { CanActivate } from '@angular/router';

export class GuardAuth implements CanActivate{

    canActivate(
        route: import("@angular/router").ActivatedRouteSnapshot,
        state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree>
        {
            console.log("guard");
            const token = localStorage.getItem('token');
            return (!! token) ;
            
        }
}