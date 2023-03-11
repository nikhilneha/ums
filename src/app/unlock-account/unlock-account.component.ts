import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {

   constructor(private unlSevice:LoginService, private activateRoute:ActivatedRoute ){
    activateRoute.params.subscribe((param)=>this.unlock=param)
   }
 
   unlock:any

   unlockAcc:FormGroup=new FormGroup({
    confirmPwd:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    newPwd:new FormControl("",[Validators.required]),
    tempPwd:new FormControl("",[Validators.required])
   })

   unlockAct()
   {
    this.unlSevice.unlockAc(this.unlockAcc.value).subscribe((res)=>alert(res))
   }
}
