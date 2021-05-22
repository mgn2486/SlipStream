import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientAddress, IClient } from 'src/app/shared/models/client-model/client.model';
import { ClientService } from 'src/app/shared/services/client-service/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  OurSubscription: Subscription = new Subscription;
  client!: IClient | null;
  pageTitle = 'Client';
  errorMessage: string = '';

  constructor(private _clientService: ClientService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
        const id = param;
        this.getClientById(id);
    }

    this.OurSubscription = this._clientService.selectedClientChanges$.subscribe( client => {
      this.client = client;
    });

  }

  getClientById(clientId: string) {
    this.OurSubscription = this._clientService.getClientById(clientId).subscribe(
        client => this.client = client,
        error => this.errorMessage = <any>error
      );
  }

  getClientAddress(address: ClientAddress | null) : string {
    if(address)
    {
      let clientAddress = [address.BuildingNumber, address.StreetName, address.Code, address.Area, address.Province ].join("\n");
      return clientAddress;
    }else{
      return 'No Address Provided'
    }
  }

  onBack() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.OurSubscription.unsubscribe();
  }

}
