import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postId: any;
  postDetails: any;
  editPostForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.dataLoaded = false;

    this.activatedRoute.params.subscribe(data => {
      this.postId = data.id;
    })

    if(this.postId !== '') {
      // view post details
      this.postService.viewPost(this.postId)
      .toPromise()
      .then(data => {
        this.postDetails = data;
        Object.assign(this.postDetails, data);
        // console.log(this.postDetails);

        // building edit post form
        this.editPostForm = this.formBuilder.group({
          'title': new FormControl(this.postDetails.title),
          'body': new FormControl(this.postDetails.body),
          'userId': new FormControl(this.postDetails.userId)
        })

        this.dataLoaded = true;

      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  updatePost() {
    // console.log(this.editPostForm.value);
    this.postService.updatePost(this.postId, this.editPostForm.value).subscribe(data => {
      console.log('Post updated successfully!');
      this.router.navigate(['dashboard']);
    }, err => {
      console.log('Unable to update post...');
    })
  }

}
