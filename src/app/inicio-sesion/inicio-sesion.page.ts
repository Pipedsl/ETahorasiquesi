import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  public formularioLogin: FormGroup;

  constructor(
    public auth : AuthService,
    private formBuilder: FormBuilder
  ) {
    this.formularioLogin = formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  public intentarLogear(){
    if (!this.formularioLogin.valid){
      alert('Formulario incorrecto');
      this.formularioLogin.reset();
      return;
    }

    const usuario = this.formularioLogin.controls['usuario'].value;
    const password = this.formularioLogin.controls['password'].value;

    if (this.auth.intentarLogear(usuario, password)){
      alert('Inicio de sesión exitoso');
    }else {
      alert('Inicio de sesión fallido. Verifica tus credenciales');
    }

    this.formularioLogin.reset();
  }

  ngOnInit() {}

}
