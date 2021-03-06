import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [
  //{path:'',component:DepartmentListComponent}, //default path
 // {path:'',redirectTo:'/departments', pathMatch:'prefix'},
  {path:'',redirectTo:'/departments', pathMatch:'full'},
  { path:'departments',
   component:DepartmentListComponent  
  },
  {path:'departments/:id',component:DepartmentDetailComponent, //The :id in the second route is a token for a route parameter
  children:[
    {path:'overview', component:DepartmentOverviewComponent},
    {path:'contact',component:DepartmentContactComponent}
  ]
  },
  {path:'employees',component:EmployeeListComponent},
  {
   path: 'depts',
  component: DepartmentListComponent,
   data: { title: 'Department List' }
 },
  {path:"**",component:PageNotFoundComponent} //wildcard path should be last
   
];

//The data property in the third route is a place to store arbitrary data associated with this specific route


@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [DepartmentListComponent,
                                  EmployeeListComponent,
                                  PageNotFoundComponent,
                                  DepartmentDetailComponent,
                                  DepartmentContactComponent,
                                  DepartmentOverviewComponent];
