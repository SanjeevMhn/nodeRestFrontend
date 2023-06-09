import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptor/auth.interceptor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({ 
      user_email: '',
      user_password: '',
    })
  }

  submit(){
    this.http.post('http://localhost:3000/api/login', this.loginForm.getRawValue(), {withCredentials: true})
    .subscribe({
      next: (res: any) => {
        AuthInterceptor.accessToken = res.access_token;
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        this.message = err.message;
      }
    })
  }

}
