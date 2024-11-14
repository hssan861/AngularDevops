import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from './chambre';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  URL = " http://172.20.10.6:8082/tpFoyer17/api/chambres"
  constructor(private http:HttpClient) { }





  
  httpOtions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  private _listners = new Subject<any>();
  listen(): Observable<any> {
   return this._listners.asObservable();
 }
 filter(filterBy:string){
   this._listners.next(filterBy);
 }
  getChambres(){
    return this.http.get<Chambre[]>(this.URL+"/retrieveAllChambres");
  }
  AddChambre( Chambre: Chambre) {
    return this.http.post<Chambre>(this.URL+"/addChambre", Chambre,this.httpOtions)


  }
  updateChambre(Chambre : Chambre){
    //let id = foyer.id;
    return this.http.put(this.URL +"/updateChambre", Chambre,this.httpOtions);
  }
  /*deleteChambre(id: number) {
    let URL2 = this.URL + "/deleteAnnCarpooling/" + id;
    return this.http.delete<Chambre>(URL2,this.httpOtions)
  }*/
}
