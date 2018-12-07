import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    {
      title: 'Actu Express',
      url: '/posts/actu-express',
      icon: 'posts'
    },
    {
      title: 'Edito',
      url: '/posts/edito',
      icon: 'posts'
    },
    {
      title: 'Politique',
      url: '/posts/politique',
      icon: 'posts'
    },
    {
      title: 'Société',
      url: '/posts/societe',
      icon: 'posts'
    },
    {
      title: 'Point barre',
      url: '/posts/point-barre',
      icon: 'posts'
    },
    {
      title: 'Bendremétrie',
      url: '/posts/bendremetrie',
      icon: 'posts'
    },
    {
      title: 'Bendrescopie',
      url: '/posts.bendrescopie',
      icon: 'posts'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  onSubscription() {
    this.menuCtrl.close();
    this.router.navigateByUrl('subscription');
  }

  onLoginPage() {
    this.menuCtrl.close();
    this.router.navigateByUrl('login');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }
}
