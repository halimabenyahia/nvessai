import { CanActivate } from '@angular/router';

export class GuardAgent implements CanActivate{

	canActivate(
		route: import("@angular/router").ActivatedRouteSnapshot, 
		state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree>
		 {
			console.log("guardAgent");
			const role = localStorage.getItem('role');
			console.log("role  " +role);
			if (role === "agent")
			{
				console.log("guard pour agent");
				return false;
			}
		
	     }
	
}