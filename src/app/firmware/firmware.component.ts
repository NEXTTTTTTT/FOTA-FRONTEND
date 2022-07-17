import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FirmwareApiService } from '../APi/firmware-api.service';

@Component({
  selector: 'app-firmware',
  templateUrl: './firmware.component.html',
  styleUrls: ['./firmware.component.scss']
})
export class FirmwareComponent implements OnInit {
  allFirmwars:any=[];
  latestFirmwares:any=[];
  constructor(private firmwareService:FirmwareApiService , private toastr:ToastrService) { 
    this.firmwareService.getData().subscribe(data=>{
      this.allFirmwars = data.firmware; 
      console.log(this.allFirmwars)
    },(err)=>{
      this.toastr.error(err.error.msg);
    })

    this.firmwareService.latestFirmware().subscribe(data=>{
      this.latestFirmwares = data.firmware; 
      console.log(this.allFirmwars)
    },(err)=>{
      this.toastr.error(err.error.msg);
    })
  }


  firmwareForm = new FormGroup({
    versionName: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl(''),
  });


  onSubmit() {
    this.firmwareService.addFirmware(this.firmwareForm.value).subscribe(data=>{
      console.log(data)
      this.toastr.success(data.msg);
    },(err)=>{
      this.toastr.error(err.error.msg);
    })
  }


  ngOnInit(): void {
  }

}
