import { Component, Input, OnInit } from '@angular/core';
import { ClientAddress } from '../../shared/models/client-model/client.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private _clientaddress!: ClientAddress;

  @Input()
  public get clientaddress(): ClientAddress {
    return this._clientaddress;
  }
  public set clientaddress(value: ClientAddress) {
    this._clientaddress = value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
