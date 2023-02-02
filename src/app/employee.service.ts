// Create Angular Employee service
// Add HttpClient to Employee service
// Connecting Angular with List Employee REST API

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address, Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  // address
  createAddress(id: number, address: Address): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${id}/addresses`, address);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // address
  getEmployeeAddresses(id: number): Observable<Address> {
    return this.httpClient.get<Address>(`${this.baseURL}/${id}/addresses`);
  }
}
