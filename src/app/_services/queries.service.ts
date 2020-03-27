import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  // HEADERS //
  headers = new HttpHeaders({
    'Authorization' : 'Bearer '+localStorage.getItem('token'),
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
  })

  
  constructor(private http : HttpClient) { }
  
  // Get information from API
  
  getQuery(query : string){
    const url = `http://167.99.156.228:8080/api/${query}`;
    return this.http.get(url, {headers : this.headers})
  }
  
  //Post information to API
  
  postQuery(query : string, data? : any, headers?: HttpHeaders){
    const url = `http://167.99.156.228:8080/api/${query}`;
    return this.http.post(url, data);
  }

  usuarioLogin(data){
    return this.postQuery('auth/login', data, this.headers);
  }

  allSpaces(){
    return this.getQuery('spaces').pipe(map(data => data['data']));
  }

  spaceById(id: string){
    return this.getQuery('spaces/'+id).pipe(map(data => data['data']));
  }

  updateEspacio(id: string, data){
    return this.postQuery('spaces/'+id, data, this.headers);
  }
}
