import { Component, Input, OnInit } from '@angular/core';
import { IClient } from 'src/app/shared/models/client-model/client.model';
import { ClientService } from 'src/app/shared/services/client-service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  private _listOfClients: IClient[] = [];
  pageTitle: string = 'Clients List';
  selectedClient: IClient | null | undefined;

  @Input()
  set listOfClients(clientsList: IClient[])
  {
     this._listOfClients = clientsList;
  }
  get listOfClients() {
    return this._listOfClients;
  }

  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {

    this._clientService.selectedClientChanges$.subscribe( client => {
      this.selectedClient = client;
    });

  }

  onSelectedClient(selectedClient: IClient) {
    this._clientService.changeSelectedClient(selectedClient);
  }

}
