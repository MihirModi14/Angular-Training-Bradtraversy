import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: null,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts=posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  removePost(post: Post) {
    if(confirm("Are You Sure?")) {
    this.postService.removePost(post.id).subscribe(() => {

      this.posts.forEach((curr: Post, index: number) => {
        if(post.id === curr.id) {
          this.posts.splice(index, 1);
        }
      });
      
    });
  }
  }

  onUpdatePost(post: Post) {
    this.posts.forEach((curr: Post, index: number) => {
      if(post.id === curr.id) {

        this.posts.splice(index, 1);
        this.posts.unshift(post);

        this.isEdit = false;
        this.currentPost = {
          id: null,
          title: '',
          body: ''
        };
      }
    });
  }

}
