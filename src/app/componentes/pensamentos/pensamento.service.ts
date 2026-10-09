import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = `${environment.supabaseUrl}/rest/v1/pensamentos`

  private readonly headers = new HttpHeaders({
    apikey: environment.supabaseKey,
    Authorization: `Bearer ${environment.supabaseKey}`
  })

  // Faz o PostgREST devolver o registro como objeto (e não como lista de um item)
  private readonly headersObjeto = this.headers
    .set('Accept', 'application/vnd.pgrst.object+json')
    .set('Prefer', 'return=representation')

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]> {

    const itensPorPagina = 6;

    let params = new HttpParams()
      .set("order", "id.asc")
      .set("limit", itensPorPagina)
      .set("offset", (pagina - 1) * itensPorPagina)

    if(filtro.trim().length > 2) {
      const termo = filtro.trim().replace(/[,()*]/g, ' ')
      params = params.set("or", `(conteudo.ilike.*${termo}*,autoria.ilike.*${termo}*)`)
    }

    if (favoritos) {
      params = params.set("favorito", "eq.true")
    }

    return this.http.get<Pensamento[]>(this.API, { headers: this.headers, params })
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento, { headers: this.headersObjeto })
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const params = new HttpParams().set("id", `eq.${pensamento.id}`)
    return this.http.patch<Pensamento>(this.API, pensamento, { headers: this.headersObjeto, params })
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const params = new HttpParams().set("id", `eq.${id}`)
    return this.http.delete<Pensamento>(this.API, { headers: this.headers, params })
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const params = new HttpParams().set("id", `eq.${id}`)
    return this.http.get<Pensamento>(this.API, { headers: this.headersObjeto, params })
  }

}
