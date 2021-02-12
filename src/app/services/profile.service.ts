import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
// import { HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    private username: string;
    private clientId: 'Iv1.1e88e2471c99a994';
    private clientSecret: '262c39ae0189c6f074352025ec014ab745e58c88';
  constructor(private http:HttpClient) {

    console.log("Github Service is ready");
    this.username= "LEE337LEE";

   }
   // function to get github profile

   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_service"
    + this.clientSecret);
      

   }
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_service"
    + this.clientSecret);

   }

   updateProfile(username){
     this.username = username;
   }

}

