import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  postId: string = '';
  postDetails: any;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      console.log(this.postId);
      this.postId = data.id;
    })

    this.postService.viewPost(this.postId).subscribe(data => {
      console.log(data);
      this.postDetails = data;
    })

  }

}
