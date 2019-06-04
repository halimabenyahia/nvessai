import { CanActivate } from '@angular/router';

export class GuardAdmin implements CanActivate{

	canActivate(
		route: import("@angular/router").ActivatedRouteSnapshot, 
		state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree>
		 {
			console.log("guardAdmin");
			const role = localStorage.getItem('role');
			console.log("role " +role);
			if (role === "admin")
			{
				
				return true;
			}
			else 
			{
				return false ;
			}
	     }
	
}