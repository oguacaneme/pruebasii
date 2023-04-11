import { Component, OnInit  } from '@angular/core';
import {  ServicesgService } from "./service/Servicesg.Service";
import { FormControl, FormGroup } from '@angular/forms';
import { Employe } from 'src/app/models/employe.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit{
  title = 'app';
  EmployeesList: any [] = [];

  employ: Employe = {
    id: 0,
    employee_name: '',
    employee_salary: 0,
    employee_age: 0,
    profile_image: '',
    employee_salary_A: 0
  };
  idemploy?:number = 0;

  constructor(private servicesgService : ServicesgService ) {

  }

  ngOnInit() {
    this.servicesgService.getemployees().subscribe({
        next: (response: any) =>{
          console.log(JSON.stringify(response) );
          this.EmployeesList = response.data;
          console.log(this.EmployeesList);
        },
        error: (e: any) => console.error(e)
    });
  }

  displayStyle = "none";

  onSubmitsearch() {

    this.EmployeesList= [];

    if(this.idemploy == 0){
      this.servicesgService.getemployees().subscribe({
          next: (response: any) =>{
            console.log(JSON.stringify(response) );
            this.EmployeesList = response.data;
            console.log(this.EmployeesList);
          },
          error: (e: any) => console.error(e)
      });

    } else {
      this.servicesgService.getemployeid(Number(this.idemploy)).subscribe({
          next: (data: any) =>{
            this.EmployeesList.push(data.data);
            console.log(this.EmployeesList);
          },
          error: (e: any) => console.error(e)
      });
    }

  }

  onSelectlogin(id: number): void {
    console.log(id );
    this.servicesgService.getemployeid(id).subscribe({
        next: (data: any) =>{
          console.log(data);
          this.employ.id =data. data.id;
          this.employ.employee_name= data.data.employee_name;
          this.employ.employee_salary= data.data.employee_salary;
          this.employ.employee_age= data.data.employee_age;
          this.employ.profile_image= data.data.profile_image;
          this.employ.employee_salary_A= (data.data.employee_salary)*12;

          site_admin: false
          console.log(this.employ);
        },
        error: (e: any) => console.error(e)
    });
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

}
