import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  codigoQr:any;
  resultadoScan: string = '';

  constructor(private alertController: AlertController,
  private photoService: PhotoService) {}

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  installGoogleBarcodeScannerModule = async () => {
  await BarcodeScanner.installGoogleBarcodeScannerModule();
};



  async scan(): Promise<void> {
    this.installGoogleBarcodeScannerModule();
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  public async escanearQr() {
    const imagenWebPath = await this.photoService.abrirCamara();

    let linkCodigo: string = '';

    if (imagenWebPath) {
      linkCodigo = imagenWebPath;
    }

    this.resultadoScan = linkCodigo;
  }
}
