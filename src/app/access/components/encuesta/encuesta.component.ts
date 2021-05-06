import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteruserService } from 'src/app/services/registeruser.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public forma!:FormGroup;

  constructor(private fb: FormBuilder,
              private auth:RegisteruserService,
              private router:Router) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidators]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'telefono': ['', [Validators.required, this.onlyNumbers]],
      'sexo': ['', Validators.required]
    });
  }

  aceptar():void {
    //console.log(this.forma.controls['sexo']);
    
    //console.log(this.forma.getRawValue());
    //console.log(this.forma.get('nombre')?.value);
    //console.log(this.forma.controls['nombre].value); otra forma 


    /* Tomo referencia del doc, acceso al documento y al documento de los datos de la encuesta en la colección encuesta */
    var idDoc = String(localStorage.getItem('idDoc'));
    var docRef = this.auth.referenciaAlaColeccion.doc(idDoc);
    var docRefEncuesta = docRef.collection('encuesta').doc('DatosEncuesta')


    /* Actualizo los datos de la encuesta y el campo encuesta del usuario */
    docRef.get().subscribe( usersData => { 
      docRefEncuesta.update({
        apellido: this.forma.controls['apellido'].value,
        edad: this.forma.controls['edad'].value,
        nombre: this.forma.controls['nombre'].value,
        sexo: this.forma.controls['sexo'].value,
        telefono: this.forma.controls['telefono'].value,
      });

      docRef.update({
        encuesta: true
      });

      localStorage.setItem('encuesta','true');
      //this.router.navigaté
    });
  }

  private spacesValidators(control:AbstractControl):null | object{
    const nombre = <string>control.value
    const espacios = nombre.includes(' ');

    if (espacios){
      return {
        contieneEspacios: true
      }
    } else {
      return null;
    }
  }

  private onlyNumbers(control:AbstractControl):null | object{
    const telefono = <string>control.value
    
    if (!(telefono.length <= 10)) {
      return {
        mayor: true
      }
    } else {
      if (!Number(telefono)) {
        return {
          nonumerico: true
        }
      } else {
        return null;
      }
    }
  }
}
