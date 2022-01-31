import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/';

  constructor(private http: HttpClient) { }

  listPosts() {
    return this.http.get(this.baseUrl + 'posts');
  }

  viewPost(id: string) {
    return this.http.get(this.baseUrl + 'posts/' + id);
  }

  deletePost(id: any) {
    return this.http.get(this.baseUrl + 'posts/' + id);
  }

  updatePost(id: any, postObj: any) {
    return this.http.put(this.baseUrl + 'posts/'+id, postObj);
  }
}
