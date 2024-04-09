import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtion.component.html',
  styleUrl: './addtion.component.css'
})
export class AddtionComponent {
  no1:number=10;
  no2:number=20;

  sum:number=0;

  add(){

    this.sum=this.no1+this.no2;
 
    console.log("sum is"+this.sum);

    console.log(this.no1 + " + " + this.no2 +"  =  " +this.sum)
  }
}
