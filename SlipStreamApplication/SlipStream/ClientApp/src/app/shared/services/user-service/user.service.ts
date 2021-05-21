import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IClient } from '../../models/client-model/client.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private selectedClientSource = new BehaviorSubject<IClient | null>(null);

  selectedClientChanges$ = this.selectedClientSource.asObservable();

  constructor(private _httpClient: HttpClient) { }

  changeSelectedClient(selectedClient: IClient | null) {
    this.selectedClientSource.next(selectedClient);
  }


}
