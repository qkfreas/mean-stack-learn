import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
//   posts = [
//     { title: 'First Post', content: 'This is post content' },
//     { title: 'Second Post', content: 'This is post content' },
//     { title: 'Third Post', content: 'This is post content' },
//   ];
    posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {}

    ngOnInit(): void {
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
          .subscribe((posts: Post[]) => {
            this.posts = posts;
          });
    }

    ngOnDestroy(): void {
        this.postsSub.unsubscribe();
    }
}
