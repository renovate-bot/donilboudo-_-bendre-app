import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  subscriptionTypes = [
    { name: 'Sélectionner', value: '', price: 0 },
    { name: 'Follower ordinaire', value: 'follower-ordinaire', price: 0 },
    { name: 'Lecteur abonné', value: 'lecteur-abonne', price: 10 },
    { name: 'Le contributeur', value: 'contributeur', price: 20 },
  ];

  customActionSheetOptions: any = {
    header: 'Type de subcription',
    subHeader: ''
  };

  selectedSubscription: string;

  constructor(private router: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  onSelectSubscription(type) {
    this.selectedSubscription = type;
  }

  onSubmit() {
    this.showToastWithCloseButton();
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

  async showToastWithCloseButton() {
    const toast: any = await this.toastCtrl.create({
      message: 'Votre abonnement est bien enregistré',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    return await toast.present();
  }
}
