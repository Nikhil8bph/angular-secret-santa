import { Alien } from './alien';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private http:HttpClient) { }

  fetchAlienListFromRemote():Observable<any>{
    return this.http.get<any>("http://34.203.189.6:8080/users");
  }

  addAlienToRemote(alien: Alien):Observable<any>{
    return this.http.post<any>("http://34.203.189.6:8080/users",alien);
  }

  fetchAlienByIdFromRemote(aid: Number):Observable<any>{
    return this.http.get<any>("http://34.203.189.6:8080/users"+aid);
  }

  deleteAlienByIdFromRemote(aid: Number):Observable<any>{
    return this.http.delete<any>("http://34.203.189.6:8080/users"+aid);
  }

  shuffleAlienFromRemote():Observable<any>{
    return this.http.get<any>("http://34.203.189.6:8080/shuffle");
  }

  shuffledEmailFromRemote():Observable<any>{
    return this.http.get<any>("http://34.203.189.6:8080/email");
  }
}
