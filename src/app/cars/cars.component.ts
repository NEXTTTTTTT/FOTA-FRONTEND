import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../APi/car-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirmwareApiService } from '../APi/firmware-api.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  carForm = new FormGroup({
    code: new FormControl(''),
    password: new FormControl(''),
    Version: new FormControl(''),
  });
  
  allCars:any = [];
  allFirmwars:any = [];
  ActiveCarsCount = this.allCars.filter((obj:any) => {
    return obj.isActive;
  });

  constructor(public carService:CarApiService ,private toastr:ToastrService, private  firmwareService:FirmwareApiService ) { 
    this.carService.getData().subscribe(data=>{
      this.allCars = data.cars; //.slice(0, 5)
    },(err)=>{
      this.toastr.error(err.error.msg);
    })


    this.firmwareService.getData().subscribe(data=>{
      this.allFirmwars = data.firmware; 
      console.log(this.allFirmwars)
    },(err)=>{
      this.toastr.error(err.error.msg);
    })
  }

  onSubmit() {
    console.log(this.carForm.value)
    // this.carService.addCar(this.carForm.value).subscribe(data=>{
    //   this.toastr.success(data.msg);
    //   location.reload();
    // },(err)=>{
    //   this.toastr.error(err.error.msg);
    // })
  }


  ngOnInit(): void {
  }

}
