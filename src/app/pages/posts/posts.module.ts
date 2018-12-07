import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostsPage } from './posts.page';
import { PostsService } from '../../services/posts.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: PostsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostsPage],
  providers: [PostsService]
})
export class PostsPageModule {}
