import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(
  ) {}

  public async abrirCamara(): Promise<string | null> {
    try {
      const imagen = await Camera.getPhoto({
        quality: 80,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      return imagen.webPath;
    } catch (error) {
      console.error('Error al abrir la camara', error);
      return null;
    }
  }
}
