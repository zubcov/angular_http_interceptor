import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  constructor(private http: HttpClient) { }

  /**
 * @description Métedo responsável por buscar carro
 * @returns any[]
 */
  public buscarAll(): Observable<any[]> {
    return this.http.get<any[]>(`carro`);
  }


  /**
   * @description Descrição do método bla bla....
   * @param obj : any
   * @returns any
   */
  public salvar(obj: any): Observable<any> {
    return this.http.post<any>(`example`, obj);
  }

  public atualizar(uuid: number): Observable<any> {
    return this.http.put<any>(`example/${uuid}`, null);
  }

  public excluir(uuid: number): Observable<any> {
    return this.http.delete<any>(`${uuid}`);
  }
}
