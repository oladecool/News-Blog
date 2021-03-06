import { Post } from '../models/post.models';
import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post [] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListen() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}