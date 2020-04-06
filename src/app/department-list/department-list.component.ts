import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
  <h2>department list</h2>
  
    <ul> 
      <li (click) = "onSelect(department)" *ngFor="let department of departments">
      <a href=""><span>{{department.id}} {{department.name}}</span></a>
      </li> 
    </ul>
  
  `,
  styles: [
  ],
})

export class DepartmentListComponent implements OnInit {

  public departments = [
    
    { "id": 1 , "name":"Java" },
    { "id": 2 , "name":"Oracle" },
    { "id": 3 , "name":"PHP" }
  
];

  constructor(private router:Router) { }

  ngOnInit() {
  
  }
  onSelect(department){
    this.router.navigate(['/departments',department.id]);

  }

}
