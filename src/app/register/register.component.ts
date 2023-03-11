import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private regServe:LoginService ,private activateRoute:ActivatedRoute){
    activateRoute.params.subscribe((param)=>this.register=param)
    this.getAllCountries()
  }
  register:any


  countries:any
  states:any
  cities:any
  
  registerUser:FormGroup=new FormGroup({
    cityId:new FormControl(),
    countryId:new FormControl(),
    dob:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    fname:new FormControl("",[Validators.required,Validators.maxLength(12),Validators.minLength(3)]),
    gender:new FormControl('',[Validators.required]),
    lname:new FormControl("",[Validators.required,Validators.maxLength(12),Validators.minLength(3)]),
    phno:new FormControl("",Validators.required),
    stateId:new FormControl()
  })



saveUser()
{
  this.regServe.postUser(this.registerUser.value).subscribe((res:any)=>alert(res))
}

getAllCountries()
{
  this.regServe.getCountries().subscribe((res:any)=> this.countries=res)
}
getStates(id:number)
{
  this.regServe.getStates(id).subscribe((res:any)=>this.states=res)
}
getAllCities(id:number): void
{
  this.regServe.getCities(id).subscribe((res:any)=>this.cities=res)
}

checkEmail(email:any)
{
  this.regServe.getEmail(email).subscribe((res)=> alert(res));


}

}