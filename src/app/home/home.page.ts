import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons,  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, RouterLinkWithHref,RouterOutlet],
})
export class HomePage{
  constructor(private router: Router) {}

  title:string = 'Home';

  openPage(){
    this.router.navigate(['/page'])
  }

  openPage2(){
    this.router.navigate(['/page2'])
  }

}


