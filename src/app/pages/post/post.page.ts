import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/model/post.model';
import { CATEGORIES } from 'src/app/model/category.model';
import { LoadingController, NavController, Content } from '@ionic/angular';

@Component({
    selector: 'app-post',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss'],
  })
  export class PostPage implements OnInit {
    @ViewChild(Content)
    content: Content;

    title = 'Articles';
    category: string;
    loading: any;
    post: Post;

    constructor(private route: ActivatedRoute,
                private postsService: PostsService,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController) { }

    ngOnInit(): void {
        const currentUrl = this.route.snapshot['_routerState'].url;
        const postId = this.getPostId(currentUrl);
        if (postId) {
            this.presentLoading();
            this.postsService
                .getPost(postId)
                .subscribe(result => {
                    this.post = result;
                    this.loading.dismiss();
                });
        }
    }

    getPostId(url: string): string {
        const urlArray = url.split('/');
        return urlArray[urlArray.length - 1];
    }

    async presentLoading() {
        this.loading = await this.loadingCtrl.create({
          message: '',
          spinner: 'dots'
          // duration: 2000
        });
        return await this.loading.present();
    }

    scrollHandler(event) {
        console.log('yup');
    }

    goBack() {
        this.navCtrl.goBack();
    }
  }
