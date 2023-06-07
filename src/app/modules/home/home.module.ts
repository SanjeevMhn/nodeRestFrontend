import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FeedComponent } from './feed/feed.component';
import { LayoutComponent } from './shared/layout/layout.component';


@NgModule({
  declarations: [
    FeedComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
