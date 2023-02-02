import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { Address } from '../../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee!: Employee;
  //addresses: Address;
  address: Address;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getEmployee();
    //this.getEmployeeAddresses();
  }

  private getId() {
    // this gives you the employee id of the route
    this.id = this.route.snapshot.params['id'];
    return this.id;
  }

  private getEmployee() {
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
      //console.log(this.employee.addresses);
      //console.log(this.employee);
    });
  }

  // private getEmployeeAddresses() {
  //   this.addresses = new Address();
  //   this.employeeService.getEmployeeAddresses(this.id).subscribe((data) => {
  //     this.addresses = data;
  //     // console.log('employee-details: ');
  //     // console.log(this.addresses);
  //   });
  // }

  addAddress(id: number) {
    this.router.navigate(['create-address', id]);
  }
}
