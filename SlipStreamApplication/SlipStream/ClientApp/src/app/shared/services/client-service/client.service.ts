import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IClient } from '../../models/client-model/client.model';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiBaseUrl = '/assets/api/clients.json';
  private prodApiUrl = 'http://localhost:11804';
  private clientRecords: IClient[]=[];

  private selectedClientSource = new BehaviorSubject<IClient | null>(null);
  selectedClientChanges$ = this.selectedClientSource.asObservable();

  constructor(private _httpClient: HttpClient) { }

  changeSelectedClient(selectedClient: IClient | null) {
    this.selectedClientSource.next(selectedClient);
  }

  getClients(): Observable<IClient[]> {
    let getAllClientsUrl = `${this.prodApiUrl}/api/clients`;
    console.log('we searcging', getAllClientsUrl);
    return this._httpClient.get<IClient[]>(getAllClientsUrl)
                           .pipe(
                              tap(data => console.log(JSON.stringify(data))),
                              catchError(this.handleError)
                           );
  }

  getClientById(clientId: string) {
      if (clientId === "0") {
          return of(this.initializeClient());
      }
      let getClientUrl = `${this.prodApiUrl}/api/clients/${clientId}`;
      const url = `${this.apiBaseUrl}/${clientId}`;
      return this._httpClient.get<IClient>(getClientUrl)
                      .pipe(
                          tap(data => console.log('Data: ' + JSON.stringify(data))),
                          catchError(this.handleError)
                      );
  }

  saveClientRecord(client: IClient) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (client.id === "0") {
        return this.createClient(client, headers);
    }
    return this.updateClient(client, headers);
  }

  deleteClient(clientId: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        const url = `${this.apiBaseUrl}/${clientId}`;
        return this._httpClient.delete<IClient>(url, { headers: headers} )
                        .pipe(
                            tap(data => console.log('deleteClient' + clientId)),
                            tap(data => {
                              const foundIndex = this.clientRecords.findIndex(item => item.id === clientId );
                              if (foundIndex > -1) {
                                this.clientRecords.splice(foundIndex, 1);
                                this.changeSelectedClient(null);
                              }
                            }),
                            catchError(this.handleError)
                        );
  }

  private createClient(client: IClient, headers: HttpHeaders): Observable<IClient> {
    client.id = null;
    return this._httpClient.post<IClient>(this.apiBaseUrl, client,  { headers: headers} )
                    .pipe(
                        tap(data => console.log('createclient: ' + JSON.stringify(data))),
                        tap(data => {
                          this.clientRecords.push(data);
                          this.changeSelectedClient(data);
                        }),
                        catchError(this.handleError)
                    );
  }

  private updateClient(client: IClient, headers: HttpHeaders): Observable<IClient> {
      const url = `${this.apiBaseUrl}/${client.id}`;
      return this._httpClient.put<IClient>(url, client, { headers: headers} )
                      .pipe(
                          tap(data => console.log('updateclient: ' + client.id)),
                          catchError(this.handleError)
                      );
  }

  private initializeClient(): IClient {
      return {
        id: null,
        firstName: '',
        lastName: '',
        initials: '',
        gender: 0,
        photoUrl: '',
        residentialAddress: null,
        workAddress: null,
        postalAddress: null,
        contactNumbers: []
      };
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof Error) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return throwError(err);
  }
}
