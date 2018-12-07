import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostPage } from './post.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

const routes: Routes = [
  {
    path: '',
    component: PostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostPage],
  providers: [PostsService]
})
export class PostPageModule { }
