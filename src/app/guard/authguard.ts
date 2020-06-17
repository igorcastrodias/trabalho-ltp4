import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationSerivce } from "../services/authentication/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private authenticationService: AuthenticationSerivce){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authenticationService.isAuthenticated()){
            return true;
        }else{
            if(state.url != '/login'){
                this.router.navigate(['/login'], {queryParams: {return: state.url}});
            }
            return false;
        }
    }
}