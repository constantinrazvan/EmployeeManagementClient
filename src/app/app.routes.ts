// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/add', component: EmployeeFormComponent },
  { path: 'employee/edit/:id', component: EmployeeFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
