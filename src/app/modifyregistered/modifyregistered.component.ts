import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alien } from '../alien';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-modifyregistered',
  templateUrl: './modifyregistered.component.html',
  styleUrls: ['./modifyregistered.component.css']
})
export class ModifyregisteredComponent implements OnInit {

  successResponse = "";
  alien = new Alien();
  constructor(private _route:Router,private _service:NgserviceService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'))
    this._service.fetchAlienByIdFromRemote(id).subscribe(
      data=> {        
        console.log("data received");
        this.alien=data;
      },
      error=>console.log("error")
    )
  }
  updateAlienformsubmit()
  {
    this._service.addAlienToRemote(this.alien).subscribe
    (
      data=> {
        this.successResponse=data.aid + "updated successfully"
        console.log("data added successfully");
        this._route.navigate(['userlist']);
      },
      error=>console.log("error")
    )
  }
  gotolist()
  {
    this._route.navigate(['']);
  }

}
