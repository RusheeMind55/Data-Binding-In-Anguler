import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrayex',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './arrayex.component.html',
  styleUrl: './arrayex.component.css'
})
export class ArrayexComponent {

  employee1:Employee= new Employee(1,"Rohan",100000);

  employee2:Employee=new Employee(2,"Ashok",20000);

  employee3:Employee=new Employee(3, " Omkar ", 545454);

  employee4:Employee=new Employee(4, "Akash ", 70000);

  employees:Employee[]=[this.employee1,this.employee2,this.employee3,this.employee4];

}

class Employee
{
  eid:number;
  name:string;
  salary:number;

  constructor(id:number , name:string,salary:number ){

    this.eid=0;
    this.name=" ";
    this.salary=0;

  }
}
