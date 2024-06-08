// src/app/employee-form/employee-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/Employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {id: 0, firstName: '', lastName: '', position: '', salary: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployee(+id).subscribe((data: Employee) => {
        this.employee = data;
      });
    }
  }

  saveEmployee(): void {
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
