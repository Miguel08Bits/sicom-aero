import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { QueriesService } from 'src/app/_services/queries.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-espacio-update',
  templateUrl: './espacio-update.component.html',
  styleUrls: ['./espacio-update.component.scss']
})
export class EspacioUpdateComponent implements OnInit {

  public espacio: any;
  tipo_espacio: any[]
  id: number;
  forma: FormGroup;
  maxSize: number = 2000000;
  nombresPersonales: string = '([A-Z][a-zA-Z]*)';

  constructor( private activatedRoute: ActivatedRoute, private fb: FormBuilder, private queries : QueriesService) { }

  ngOnInit(): void {

    console.log(this.activatedRoute.params);
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:        [null, [Validators.required, Validators.pattern(this.nombresPersonales), Validators.minLength(3)]],
      latitud:       [null, [Validators.required, RxwebValidators.latitude()]],
      longitud:      [null, [Validators.required, RxwebValidators.longitude()]],
      espacio:       [null, Validators.required],
      poblacion:     [null, [Validators.required, Validators.min(1000)]],
    })
  }

  getEspacio(){
    this.queries.allSpaces().subscribe(
      (resp) => {
        for(var i = 0; i < resp.length; i++){
          this.tipo_espacio[i] = resp[i];
        }
      },
      (err) => console.log(err)
      );
      return this.tipo_espacio;
    }



  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
   }
   
   get latitudNoValida(){
     return this.forma.get('latitud').invalid && this.forma.get('latitud').touched;
   }
   get longitudNoValida(){
     return this.forma.get('longitud').invalid && this.forma.get('longitud').touched;
   }
   
   get espacioNoValido(){
     return this.forma.get('espacio').invalid && this.forma.get('espacio').touched;
   }
   
   get poblacionNoValida(){
     return this.forma.get('poblacion').invalid && this.forma.get('poblacion').touched;
   }

  //  actualizaEspacio(){
  //   const formData = new FormData();
  //   formData.append('name', this.forma.get('nombre').value);
  //   formData.append('space_type_id', this.forma.get('espacio').value);
  //   formData.append('latitude', this.forma.get('latitud').value);
  //   formData.append('longitude', this.forma.get('longitud').value);
  //   formData.append('population', this.forma.get('poblacion').value);
  //   // formData.append('file', this.forma.get('archivo').value);
  //   this.queries.updateEspacio(this.id, formData).subscribe(
  //     (resp: any) => {
  //       console.log("Actualización exitosa ");
  //       // this.toastr.success("Registro exitoso")
  //     }
  //     ,
  //     (err: HttpErrorResponse) => {
  //       // this.toastr.error("Hubo un error con el registro, favor de verificar los datos", err.error.message)
        
  //       console.log("Actualización sin éxito ");
  //     }
  //   )
  //  }


}
