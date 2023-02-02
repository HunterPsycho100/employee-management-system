import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Address } from '../employee';

//import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css'],
})
export class AddressInfoComponent implements OnInit {
  @Input() id: number;
  @Input() employee!: Employee;
  @Input() address: Address;
  constructor() {}

  ngOnInit(): void {
    // console.log('address-info: ');
    // console.log(this.address.city);
  }
}
