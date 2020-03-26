import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-espacio-update',
  templateUrl: './espacio-update.component.html',
  styleUrls: ['./espacio-update.component.scss']
})
export class EspacioUpdateComponent implements OnInit {

  public espacio: any;
  forma: FormGroup;
  maxSize: number = 2000000;
  nombresPersonales: string = '([A-Z][a-zA-Z]*)';

  constructor( private activatedRoute: ActivatedRoute, private fb : FormBuilder) { }

  ngOnInit(): void {

    this.espacio = history.state.data;
    console.log(this.activatedRoute.params);
  }

}
