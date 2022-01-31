import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  listPosts: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.listPosts().subscribe(data => {
      this.listPosts = data;
    });
  }

}
