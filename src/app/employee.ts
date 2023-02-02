//hold response of a rest API
// import { Address } from './address';

export class Address {
  id!: number;
  city!: string;
  usState!: string;
  country!: string;
  postalCode!: string;
  addressType!: string;
  employeeId: number;
  address: string;
}

export class Employee {
  id!: number;
  firstName!: string;
  lastName!: string;
  emailId!: string;
  addresses: Address[];
}
