import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-docente',
  templateUrl: './profile-docente.component.html',
  styleUrls: ['./profile-docente.component.scss'],
})
export class ProfileDocenteComponent  implements OnInit {
  codigoQr:any;

  constructor() { }

  ngOnInit() {}

  public generarQR(){
    this.codigoQr = 'https://github.com/Pipedsl/ET.git';
  }

}
