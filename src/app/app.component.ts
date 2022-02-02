import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Serv-App';

  constructor(  private route : Router, public dataService : DataService ) {}

  ngOnInit(): void {};

  logout(){
    localStorage.removeItem('token')
    this.dataService.logged()
    this.route.navigate(['/Login'])
  }
}