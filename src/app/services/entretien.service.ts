import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entretien } from '../entity/entretien';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {

  entretien : Entretien ;
  constructor(private http : HttpClient) { }

  public getProgEntretiens(){
    return this.http.get('http://localhost:8091/programmeEntretiens');
  }

  public getProgEntretiensById(id_programme){
    return this.http.get('http://localhost:8091/programmeEntretiens'+ `/${id_programme}`);
  }

  public addProgramme(entretien){
    return this.http.post('http://localhost:8091/addProgramme',entretien);
  }

  public supprimer(id_programme){
    return this.http.delete('http://localhost:8091/deleteProgrammeEnt'+`/${id_programme}`);
  }

  public edit(entretien){
    return this.http.put('http://localhost:8091/editProgramEnt',entretien);
  }
}
