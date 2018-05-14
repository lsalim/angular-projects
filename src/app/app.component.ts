import { Component } from '@angular/core';
import { Post } from './post-list-item/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tincidunt ullamcorper. Proin tempor finibus venenatis. Etiam porttitor diam quam, id porttitor enim venenatis scelerisque.', 10),
    new Post('Mon deuxième post', 'Nulla quis purus enim. In sit amet ultrices orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam convallis massa diam, id accumsan nisi ultricies sit amet.', -5),
    new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tincidunt ullamcorper. Proin tempor finibus venenatis. Etiam porttitor diam quam, id porttitor enim venenatis scelerisque.', 0)
  ];

}
