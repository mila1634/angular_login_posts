import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from 'src/app/posts/posts-routing.module';
//import { HomeComponent } from 'src/app/home/home.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ListPostsComponent } from './list-posts/list-posts.component';


@NgModule({
  declarations: [
    //HomeComponent,
    ViewPostComponent,
    EditPostComponent,
    DeletePostComponent,
    LayoutComponent,
    ListPostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule,
  ],
  exports: [
    //HomeComponent,
    ViewPostComponent,
    EditPostComponent,
    DeletePostComponent
  ]
})
export class PostsModule { }
