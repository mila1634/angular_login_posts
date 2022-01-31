import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  postId: string = '';

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.postId = data.id;
    })

    if(this.postId) {
      this.postService.deletePost(this.postId).subscribe(data => {
        console.log('Post deleted successfully!');
        this.router.navigate(['dashboard']);
      }, err => {
        console.log('Unable to delete post...')
      })
    }

  }

}
