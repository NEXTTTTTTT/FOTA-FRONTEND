import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeApiService } from '../APi/employee-api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  addEmpForm = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  allEmps:any = [];
  ActiveEmpsCount = this.allEmps.filter((obj:any) => {
    return obj.isActive;
  });

  constructor(public empService:EmployeeApiService, private toastr:ToastrService) {
    this.empService.getAll().subscribe(data=>{
      this.allEmps = data.employees; //.slice(0, 5)
    },(err)=>{
      this.toastr.error(err.error.msg);
    })
   }


  onSubmit() {
    this.empService.addEmp(this.addEmpForm.value).subscribe(data=>{
      this.toastr.success(data.msg);
      location.reload();
    },(err)=>{
      this.toastr.error(err.error.msg);
    })
  }
  ngOnInit(): void {
  }

}
