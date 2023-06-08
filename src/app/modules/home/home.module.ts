import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FeedComponent } from './feed/feed.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    FeedComponent,
    LayoutComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
