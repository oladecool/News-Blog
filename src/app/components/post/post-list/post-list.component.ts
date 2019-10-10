import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../../models/post.models';
import { PostService } from 'src/app/services/post.services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'},
  // ];

  @Input() posts: Post[] = [];

  constructor(postService: PostService) { }

  ngOnInit() {
  }

}
