import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthInterceptor } from 'src/app/interceptor/auth.interceptor';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  // showModal:boolean = false;
  // createPostForm!:FormGroup ;
 
  ngOnInit(): void { 
    
  }

  // togglePostModal(state:boolean): void{
  //   this.showModal = state;
  // }

  

  logout(){
    this.http.get('http://localhost:3000/api/logout',{withCredentials: true}).subscribe({
      next: (res:any) => {
        this.router.navigate(['/auth']);
        AuthInterceptor.accessToken = '';
      }
    })
  }

}
