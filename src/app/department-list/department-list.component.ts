import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
  <h2>department list</h2>
  
    <ul> 
      <li (click) = "onSelect(department)" [class.selected]="isSelectedId(department)" *ngFor="let department of departments">
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
  selectedId: number;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params  =>{
      let id = parseInt(params.get("id"));
      this.selectedId = id;
    });
  }
  onSelect(department){
    this.router.navigate(['/departments',department.id]);

  }

  isSelectedId(department){
    return department.id === this.selectedId;
  }

}
