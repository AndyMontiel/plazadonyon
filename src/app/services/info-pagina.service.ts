import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pag.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) { 
    //console.log('Servicio de pagina cargada');

    this.http.get('assets/data/data-pag.json')
        .subscribe( (resp: infoPagina) => {

          this.cargada = true;
          this.info = resp;

          console.log(resp);
        } );
  }
}
