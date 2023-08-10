import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post'

import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  @ViewChild('title') titleModel: NgModel;
  @ViewChild('body') bodyModel: NgModel;

  constructor(private postService: PostService) { }

  ngOnInit(): void {}

  addPost(title: string, body: string) {
    this.postService.savePost({title, body} as Post).subscribe((post)=>{
      this.newPost.emit(post);
    });

    this.titleModel.reset();
    this.bodyModel.reset();
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe((post)=>{
      this.updatedPost.emit(post);
    });
  }
}
