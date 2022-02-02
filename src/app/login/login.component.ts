import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private route : Router, private fb : FormBuilder, public dataService : DataService) { }
      
  stdForm = this.fb.group({
    email : ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
    password : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
  });

  userData : any

  ngOnInit(): void {
    this.userData = this.dataService.getData()
    this.dataService.getUserData().subscribe(( data : any ) => this.userData = data)
  }

Login():any{
  console.log(this.userData)
  this.userData.forEach((element:any) => {
    if(element.email === this.stdForm.value.email){
      console.log(element.email)
      localStorage.setItem('token',element)
      this.route.navigate(['/Dashboard'])
      this.dataService.logged()
      console.log("status...",this.dataService.logged())
    }
  });
}

}