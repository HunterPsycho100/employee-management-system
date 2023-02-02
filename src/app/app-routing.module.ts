import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CreateAddressComponent } from './create-address/create-address.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'create-address/:id', component: CreateAddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
