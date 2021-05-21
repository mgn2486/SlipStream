import { Component, OnInit } from '@angular/core';
import { IClient } from '../shared/models/client-model/client.model';
import { ClientService } from '../shared/services/client-service/client.service';

@Component({
  selector: 'app-client-administration',
  templateUrl: './client-administration.component.html',
  styleUrls: ['./client-administration.component.css']
})
export class ClientAdministrationComponent implements OnInit {

  errorMessage: string = '';
  numberOfClients: number = 4;
  listOfClients: IClient[] = [];

  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {

    this._clientService.getClients().subscribe(
      (clientList) =>{
        this.listOfClients = clientList;
      },
      (error: any) => this.errorMessage = <any>error
    );

  }

}
