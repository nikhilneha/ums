import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private activateRoute2:ActivatedRoute){
    activateRoute2.params.subscribe((param)=>this.logout=param)
  }

  logout:any
}
