import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public usersUrl = "https://jsonplaceholder.typicode.com/users"

  public userData = "../assets/users.json"

  public login : boolean = false

  constructor( private http : HttpClient ) { }

  getData(){
    return this.userData
  }

  getUserData(){
    return this.http.get(this.usersUrl)
  }

  getLogin(){
    return this.login
  }

  logged():any{
    if(localStorage.getItem('token')){
      return !this.login
    }
  }

}