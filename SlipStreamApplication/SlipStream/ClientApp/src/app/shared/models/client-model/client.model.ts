export interface IClient {
  Id: string | null;
  FirstName: string;
  LastName: string;
  Initials: string;
  Gender: GenderEnum;
  PhotoUrl: string;
  ResidentialAddress: ClientAddress | null;
  WorkAddress: ClientAddress | null;
  PostalAddress: ClientAddress | null;
  ContactNumbers: string[]
}

export interface ClientAddress {
  BuildingNumber: string;
  StreetName: string;
  Area: string;
  Code: string;
  Province: string
}

export enum GenderEnum {
  Male = 1,
  Female = 2
}
