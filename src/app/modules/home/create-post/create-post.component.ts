import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  createPostForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.createPostForm = this.fb.group({
      post_title: '',
      post_desc: ''
    });
  }

  submitForm() {

    this.http.post('http://localhost:3000/api/posts', this.createPostForm.getRawValue())
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['/home']);
          // this.location.reload();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
  }
}
