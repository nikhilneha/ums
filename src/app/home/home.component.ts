import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private forgotServe:LoginService, private activateRoute1:ActivatedRoute){
    activateRoute1.params.subscribe((param)=>this.forgot=param)
  }
  forgot:any
  
  forgotPass:FormGroup=new FormGroup({
    emailId:new FormControl("",[Validators.required,Validators.email])
  })

  
  forgotPswd()
  {
    this.forgotServe.forgotPwd(this.forgotPass.value.emailId).subscribe((res)=>alert(res))
  }
}
