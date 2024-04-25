import { Component, Input } from '@angular/core';

import { Post } from '../posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
//   posts = [
//     { title: 'First Post', content: 'This is post content' },
//     { title: 'Second Post', content: 'This is post content' },
//     { title: 'Third Post', content: 'This is post content' },
//   ];
    @Input() posts = [];
}
