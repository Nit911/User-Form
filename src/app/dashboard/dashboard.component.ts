import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private route : Router,private dataService : DataService, private fb : FormBuilder) { }

  users : any

  ngOnInit(): void {
    this.dataService.getUserData().subscribe(( data : any ) => this.users = data)
  }

  button(){
    console.log(this.users)
  }

  logout(){
    localStorage.removeItem('token')
    this.dataService.logged()
    this.route.navigate(['/Login'])
  }
}