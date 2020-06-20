import { Component, OnInit } from '@angular/core';
import { AuthenticationSerivce } from 'src/app/services/authentication/authentication.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Login } from "../../services/authentication/login.model";
import { LocalStorageHelper } from 'src/app/helpers/localStorageHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationSerivce, private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    email: ['Email',Validators.required],
    password: ['',Validators.required]
  });


  ngOnInit(): void {
  }

  submit(){
    var login : Login = this.loginForm.value;
    this.authService.authenticate(login).subscribe(data => {
      if(data.length > 0 && data[0].password == login.password){
          LocalStorageHelper.addLocalStorage("user", JSON.stringify(new Login(data[0].nome, data[0].email)));
          this.router.navigate(['/admin']);
      }else{
        alert("Usuário ou senha incorretos!!");
      }
    });
  }

}
