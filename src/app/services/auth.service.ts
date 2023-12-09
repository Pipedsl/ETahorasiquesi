import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { Usuarios } from 'src/models/Usuarios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private usuarioActivo: BehaviorSubject< Usuarios | null> = new BehaviorSubject<Usuarios | null> (null);

  public $usuarioActivo = this.usuarioActivo.asObservable();

  constructor() { }

  public intentarLogear(usuario: string, password: string){
    const usuarioEncontrado = this.usuarios.find(
      u => u.username === usuario && u.contrasenia === password
    );

    if (usuarioEncontrado) {
      this.usuarioActivo.next(usuarioEncontrado);
      return true;
    }else {
      return false;
    }
  }


  private usuarios: Usuarios[] = [
    {
      id: 1,
      username: 'MarioPlumber123',
      contrasenia: 'pass123',
      nombres: 'Mario',
      apellidos: 'Bros',
      tipo_usuario: 'docente',
    },
    {
      id: 2,
      username: 'LaraAdventurer456',
      contrasenia: 'pass456',
      nombres: 'Lara',
      apellidos: 'Croft',
      tipo_usuario: 'docente',
    },
    {
      id: 3,
      username: 'MasterChief789',
      contrasenia: 'pass789',
      nombres: 'John',
      apellidos: '117',
      tipo_usuario: 'docente',
    },
    {
      id: 4,
      username: 'SamusHunterABC',
      contrasenia: 'passabc',
      nombres: 'Samus',
      apellidos: 'Aran',
      tipo_usuario: 'docente',
    },
    {
      id: 5,
      username: 'LinkHeroXYZ',
      contrasenia: 'passxyz',
      nombres: 'Link',
      apellidos: '',
      tipo_usuario: 'docente',
    },
    {
      id: 6,
      username: 'EzioAssassin123',
      contrasenia: 'student123',
      nombres: 'Ezio',
      apellidos: 'Auditore',
      tipo_usuario: 'estudiante',
    },
    {
      id: 7,
      username: 'AloyMachine456',
      contrasenia: 'student456',
      nombres: 'Aloy',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
    {
      id: 8,
      username: 'KratosGod789',
      contrasenia: 'student789',
      nombres: 'Kratos',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
    {
      id: 9,
      username: 'GeraltWitcherABC',
      contrasenia: 'studentabc',
      nombres: 'Geralt',
      apellidos: 'of Rivia',
      tipo_usuario: 'estudiante',
    },
    {
      id: 10,
      username: 'SonicSpeedXYZ',
      contrasenia: 'studentxyz',
      nombres: 'Sonic',
      apellidos: 'the Hedgehog',
      tipo_usuario: 'estudiante',
    },
    {
      id: 11,
      username: 'NathanUncharted123',
      contrasenia: 'student123',
      nombres: 'Nathan',
      apellidos: 'Drake',
      tipo_usuario: 'estudiante',
    },
    {
      id: 12,
      username: 'YoshiEgg456',
      contrasenia: 'student456',
      nombres: 'Yoshi',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
    {
      id: 13,
      username: 'ChellPortal789',
      contrasenia: 'student789',
      nombres: 'Chell',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
    {
      id: 14,
      username: 'MarcusPhoenixABC',
      contrasenia: 'studentabc',
      nombres: 'Marcus',
      apellidos: 'Phoenix',
      tipo_usuario: 'estudiante',
    },
    {
      id: 15,
      username: 'TifaAvalancheXYZ',
      contrasenia: 'studentxyz',
      nombres: 'Tifa',
      apellidos: 'Lockhart',
      tipo_usuario: 'estudiante',
    },
    {
      id: 16,
      username: 'RyuStreetFighter123',
      contrasenia: 'student123',
      nombres: 'Ryu',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
    {
      id: 17,
      username: 'AerithFloral456',
      contrasenia: 'student456',
      nombres: 'Aerith',
      apellidos: 'Gainsborough',
      tipo_usuario: 'estudiante',
    },
    {
      id: 18,
      username: 'SoraKeyblade789',
      contrasenia: 'student789',
      nombres: 'Sora',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
    {
      id: 19,
      username: 'JoelLastOfUsABC',
      contrasenia: 'studentabc',
      nombres: 'Joel',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
    {
      id: 20,
      username: 'CortanaAIXYZ',
      contrasenia: 'studentxyz',
      nombres: 'Cortana',
      apellidos: '',
      tipo_usuario: 'estudiante',
    },
  ];
}
