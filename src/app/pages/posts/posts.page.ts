import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Post } from 'src/app/model/post.model';
import { PostsService } from '../../services/posts.service';
import { CATEGORIES } from 'src/app/model/category.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  title = '';
  category: string;
  posts: Post[];
  loading: any;
  currentUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.currentUrl = this.route.snapshot['_routerState'].url;
    this.setTitle();
    this.loadData();
  }

  loadData() {
    this.presentLoading();

    this.postsService.getPosts(this.category).subscribe(results => {
          this.posts = results;
          this.posts.forEach(post => {
            this.setPostCategoriesString(post);
          });
          console.log('On a recupere tous');
          this.loading.dismiss();
    });
  }

  setTitle() {
    if (this.currentUrl.includes('edito')) {
      this.title = 'Edito';
      this.category = 'edito';
    } else if (this.currentUrl.includes('actu-express')) {
      this.title = 'Actu express';
      this.category = 'actu-express';
    } else if (this.currentUrl.includes('politique')) {
      this.title = 'Politique';
      this.category = 'politique';
    } else if (this.currentUrl.includes('societe')) {
      this.title = 'Société';
      this.category = 'societe';
    } else if (this.currentUrl.includes('point-barre')) {
      this.title = 'Point barre';
      this.category = 'point-barre';
    } else if (this.currentUrl.includes('bendremetrie')) {
      this.title = 'Bendremetrie';
      this.category = 'bendremetrie';
    } else if (this.currentUrl.includes('bendrescopie')) {
      this.title = 'Bendrescopie';
      this.category = 'bendrescopie';
    }
  }

  details(postId) {
   this.router.navigateByUrl(this.currentUrl + '/' + postId);
  }

  setPostCategoriesString(post: Post) {
    let categoriesString = '';
    post.categories.forEach(category => {
        const findCategory = CATEGORIES.find(element => element.value === category);
        if (findCategory) {
          if (categoriesString !== '') {
            categoriesString += ', ';
          }
          categoriesString += findCategory.name;
        }
    });
    post.categoriesString = categoriesString;
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: '',
      spinner: 'dots'
      // duration: 2000
    });
    return await this.loading.present();
  }

}
