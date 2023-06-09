import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  posts: any[] = [];

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/posts')
    .subscribe({
      next:(res:any) => {
        this.posts = res.posts
      },
      error: () => {
        // this.router.navigate(['/auth']);
      }
    });
  }

}
