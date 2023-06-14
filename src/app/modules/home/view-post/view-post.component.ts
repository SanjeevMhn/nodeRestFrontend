import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  post!:any;

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost(id);
  }

  getPost(id:number):void{
    // console.log(id);
    this.http.get(`http://localhost:3000/api/posts/${id}`)
    .subscribe({
      next: (res:any) => {
        this.post = res.post[0];
        // console.log(this.post);
      },
      error: (err: any) => {
        console.error(err);
      }
    })    
  }

}
