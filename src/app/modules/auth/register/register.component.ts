import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
    this.signupForm = this.fb.group({
      user_ft_name: '',
      user_lt_name: '',
      user_email: '',
      user_password: '',
    });
  }

  signup(){
    let val = this.signupForm.value;
    let registerData = {
      user_name: `${val.user_ft_name} ${val.user_lt_name}`,
      user_email: val.user_email,
      user_password: val.user_password
    };

    this.http.post('http://localhost:3000/api/register',registerData).subscribe({
      next: (res:any) => {
        this.router.navigate(['/auth']);
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
