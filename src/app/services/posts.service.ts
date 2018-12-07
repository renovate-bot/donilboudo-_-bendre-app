import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'http://www.bendre.admedia-technologies.com/wp-json/wp/v2/';

  constructor(private http: HttpClient) { }

  getPosts(category: string): Observable<Post[]> {
    const r1 = this.http.get(this.getPostsUrlWithCategory(category), { observe: 'response' });
    return this.http
      .get(this.getPostsUrlWithCategory(category), { observe: 'response' })
      .pipe(
        map((response: any) => {
          const posts: Post[] = [];
          if (response.body) {
            response.body.forEach(element => {
              const post = new Post(element);
              posts.push(post);
              // if (post.status === 'publish') {
              //   if (post.featured_media) {
              //     this.getMedia(post.featured_media.toString())
              //         .subscribe((result: any) => {
              //            post.mediaLink = result.guid.rendered;
              //            posts.push(post);
              //            console.log('lien assigne');
              //         });
              //   } else {
              //     posts.push(post);
              //   }
              // }
            });
          }
          return posts;
        }
        ));
  }

  getPost(postId): Observable<Post> {
    const postUrl = this.baseUrl + 'posts/' + postId;
    return this.http
      .get(postUrl, { observe: 'response' })
      .pipe(
        map((response: any) => {
          if (response.body) {
            const post = new Post(response.body);
            if (response.body.featured_media) {
              this.getMedia(response.body.featured_media)
                .subscribe((result: any) => {
                  post.mediaLink = result.guid.rendered;
                  console.log(post);
                  // return post;
                });
              return post;
            } else {
              return post;
            }
          }
        })
      );
  }

  addPost() { }

  updatePost() { }

  deletePost() { }

  // getMedia (mediaId: string, post: Post) {
  //   const url = 'http://www.bendre.admedia-technologies.com/wp-json/wp/v2/media/';
  //   this.http
  //       .get(url + mediaId)
  //       .subscribe((result: any) => {
  //         const link = result.guid.rendered;
  //         post.mediaLink = link;
  //       });
  // }

  getMedia(mediaId: string): Observable<any> {
    const url = 'http://www.bendre.admedia-technologies.com/wp-json/wp/v2/media/';
    return this.http.get(url + mediaId);
  }

  getPostsUrlWithCategory(category): string {
    let url = this.baseUrl + 'posts?categories=';
    if (category === 'edito') {
      url += '6';
    } else if (category === 'actu-express') {
      url += '14+29+30';
    } else if (category === 'politique') {
      url += '15+26+27+28';
    } else if (category === 'societe') {
      url += '18+23+24+25';
    } else if (category === 'point-barre') {
      url += '17+21+22';
    } else if (category === 'bendremetrie') {
      url += '16+12+13+20';
    } else if (category === 'bendrescopie') {
      url += '7+8+9+10+11';
    }

    return url;
  }
}
