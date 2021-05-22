export interface IClient {
  id: string | null;
  firstName: string;
  lastName: string;
  initials: string;
  gender: GenderEnum;
  photoUrl: string;
  residentialAddress: ClientAddress | null;
  workAddress: ClientAddress | null;
  postalAddress: ClientAddress | null;
  contactNumbers: string[]
}

export interface ClientAddress {
  buildingNumber: string;
  streetName: string;
  area: string;
  code: string;
  province: string
}

export enum GenderEnum {
  Male = 1,
  Female = 2
}
