import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss']
})
export class EspaciosComponent implements OnInit {

  espacios : any[] = [];

  constructor(private spaces : LoginService) { this.getEspacios();  }

  ngOnInit(): void {
  }

  getEspacios(){
    this.spaces.allSpaces().subscribe(
      (resp) => {
        for(var i=0; i<resp.length; i++){
          this.espacios = resp[i];
          console.log(this.espacios);
        }
      },
      (err) => {
        console.log(err);
      }
    );
    return this.espacios;
  }

}
