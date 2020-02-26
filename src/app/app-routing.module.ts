import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'departments', 
    component: DepartmentListComponent
  },
  {
    path: 'departments/:id', 
    component: DepartmentDetailComponent
  },
  {
    path: 'employees', 
    component: EmployeeListComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomePageComponent,
  DepartmentListComponent,
  EmployeeListComponent, 
  PageNotFoundComponent,
  DepartmentDetailComponent,
];
