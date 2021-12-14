import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alien } from '../alien';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewregistered',
  templateUrl: './viewregistered.component.html',
  styleUrls: ['./viewregistered.component.css']
})
export class ViewregisteredComponent implements OnInit {

  _alienlist: Alien[];
  shuffleMessage = "";
  mailMessage = "";
  constructor(private _service:NgserviceService,private _route:Router) { }

  ngOnInit(): void {
    this._service.fetchAlienListFromRemote().subscribe(
      data=>{
        console.log("Alien list received");
        this._alienlist=data;
      },
      error=>console.log("unable to fetch Alien List")
    )
  }
  goToAddAlien(){
    this._route.navigate(['/adduser']);
  }
  goToEditAlien(id:number)
  {
    console.log("id"+id);
    this._route.navigate(['/edituser',id]);
  }
  goToDeleteAlien(id:number)
  {
    this._service.deleteAlienByIdFromRemote(id).subscribe(
      data=>{
        console.log(data)
        this.shuffleMessage="Deleted successfully";
      },
      error=>console.log("unable to delete")
    )
  }
  goToShuffleAlien()
  {
    this._service.shuffleAlienFromRemote().subscribe(
      data=>{
        console.log(data);
        this.shuffleMessage="Shuffled successfully";
      },
      error=>{
        console.log("unable to shuffle")    
        this.shuffleMessage="unable to shuffle"
      }
    )
  }

  goToEmailAlien()
  {
    this._service.shuffledEmailFromRemote().subscribe(
      data=>{
        console.log(data);
        this.shuffleMessage="Emails send successfully";
      },
      error=>{
        console.log("unable to email")    
        this.shuffleMessage="unable to send email"
      }
    )
  }
}
