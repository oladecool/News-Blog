import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../../../models/post.models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'},
  // ];

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListen()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
