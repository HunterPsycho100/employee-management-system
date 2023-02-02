import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Address } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css'],
})
export class CreateAddressComponent implements OnInit {
  id: number;
  employee!: Employee;
  address: Address = new Address();
  address1: Address;
  hideInput = true;
  items = [
    { name: 'Home', value: 'Home' },
    { name: 'Mailing', value: 'Mailing' },
    { name: 'Work', value: 'Work' },
  ];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getId();
    //console.log(this.id);
    this.address.employeeId = this.id;
  }

  back(id: number) {
    this.router.navigate(['employee-details', id]);
  }

  private saveAddress() {
    this.employeeService.createAddress(this.id, this.address).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeDetails();
        //console.log(this.address);
      },
      (error) => console.log(error)
    );
  }

  private getId() {
    // this gives you the employee id of the route
    this.id = this.route.snapshot.params['id'];
    return this.id;
  }
  goToEmployeeDetails() {
    this.router.navigate(['employee-details', this.id]);
  }

  onSubmit() {
    console.log(this.address);
    this.saveAddress();
  }
}
