import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Alien } from '../alien';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  alien = new Alien();
  successResponse = "";
  // santaDropDown: Santa[];
  constructor(private _route:Router,private _service:NgserviceService) { }
  ngOnInit(): void {
  }

  addAlienformsubmit()
  {
    this._service.addAlienToRemote(this.alien).subscribe
    (
      data=> {
        console.log(data);
        console.log("User added successfully");
        this.successResponse="User registered with id = "+data.aid;
        // this._route.navigate(['userlist']);
      },
      error=>console.log("Error while adding user")
    )
  }
  gotolist()
  {
    this._route.navigate(['']);
  }
}
