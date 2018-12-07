import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'posts/actu-express/:id',
    loadChildren: './pages/post/post.module#PostPageModule'
  },
  {
    path: 'posts/actu-express',
    loadChildren: './pages/posts/posts.module#PostsPageModule'
  },
  {
    path: 'posts/edito',
    loadChildren: './pages/posts/posts.module#PostsPageModule'
  },
  {
    path: 'posts/edito/:id',
    loadChildren: './pages/post/post.module#PostPageModule'
  },
  {
    path: 'posts/politique',
    loadChildren: './pages/posts/posts.module#PostsPageModule'
  },
  {
    path: 'posts/politique/:id',
    loadChildren: './pages/post/post.module#PostPageModule'
  },
  {
    path: 'posts/societe',
    loadChildren: './pages/posts/posts.module#PostsPageModule'
  },
  {
    path: 'posts/societe/:id',
    loadChildren: './pages/post/post.module#PostPageModule'
  },
  {
    path: 'posts/point-barre',
    loadChildren: './pages/posts/posts.module#PostsPageModule'
  },
  {
    path: 'posts/point-barre/:id',
    loadChildren: './pages/post/post.module#PostPageModule'
  },
  {
    path: 'posts/bendremetrie',
    loadChildren: './pages/posts/posts.module#PostsPageModule'
  },
  {
    path: 'posts/bendremetrie/:id',
    loadChildren: './pages/post/post.module#PostPageModule'
  },
  {
    path: 'posts.bendrescopie',
    loadChildren: './pages/posts/posts.module#PostsPageModule'
  },
  {
    path: 'posts.bendrescopie/:id',
    loadChildren: './pages/post/post.module#PostPageModule'
  },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'subscription', loadChildren: './pages/subscription/subscription.module#SubscriptionPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
