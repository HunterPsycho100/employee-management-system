import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
})
export class EmployeeInfoComponent implements OnInit {
  @Input() id: number;
  @Input() employee!: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}
}
