import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private urlEndPoint: string ='https://etscapacitacion.com/php/sendemail.php';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  private handleError<T> (operation = 'operation', result?:T){
    return(error: any):Observable<T> =>{
      console.error(error);
      return of(result as T)
    }
  }
  constructor(private http: HttpClient) { }

  SendEmail(cliente): Observable<any>{
    console.log(cliente)

  return this.http.post<any>(`${this.urlEndPoint}`,cliente, {headers: this.httpHeaders}).pipe(
          tap(
            post => console.log(post)
          ),
          catchError(this.handleError('Sending email',[]))
  );
}
}
