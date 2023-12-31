import { Component, OnInit } from '@angular/core';
//librerias de formulario
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
//---

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  form: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      mail: ['', [Validators.required,Validators.email]]
    })
  }

  ngOnInit() { }

get Mail(){
  return this.form.get("mail");
}
get Password(){
  return this.form.get("password");
}
get PasswordValid(){
  return this.Password?.touched &&!this.Password?.valid;
}
get MailValid(){
  return this.Mail?.touched &&!this.Mail?.valid;
}
onEnviar(event:Event){
  //Detener el funcionamiento por defecto
  event.preventDefault;
  if(this.form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra como
    alert("Todo salio bien ¡Enviar formuario!")
  } else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched(); 
  }
}

}
