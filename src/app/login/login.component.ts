import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formServe:LoginService){}
  signIn:FormGroup=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    pwd:new FormControl("",[Validators.required])
  })
    userList:any
  saveData()
  {
    console.log("api hit success")
    this.formServe.loginUser(this.signIn.value).subscribe((res:any)=>alert(res))
  }
}
