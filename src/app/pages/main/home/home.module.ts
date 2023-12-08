import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ProfileDocenteComponent } from './profile-docente/profile-docente.component';

// Se importa el modulo para el códigoQR
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ProfileDocenteComponent
  ]
})
export class HomePageModule {}
