import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss']
})
export class EspaciosComponent implements OnInit {

  espacios : any[] = [];

  constructor(private spaces : LoginService, private router: Router) { this.getEspacios();  }

  ngOnInit(): void {
  }

  getEspacios(){
    this.spaces.allSpaces().subscribe(
      (resp) => {
        for (var i = 0; i < resp.length; i++) {
        this.espacios.push(resp[i]);
        }
      },
      (err) => {
        console.log(err);
      }
    );
    return this.espacios;
  }

  updateEspacio(obj: any){
    console.log("Fire Event", obj);
    this.router.navigateByUrl("admin/dashboard/espacio-update/"+obj.id, {state: {data: obj}});
  }

}
