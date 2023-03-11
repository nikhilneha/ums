import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  baseUrl=`http://15.206.171.20:9090/`
  
  loginUser(data:any)
  {
    return this.http.post(`${this.baseUrl}login`,data,{responseType:'text'})
  }
  postUser(data:any)
  {
    return this.http.post(`${this.baseUrl}saveUser`,data,{responseType:'text'})
  }
  getCountries()
  {
    return this.http.get(`${this.baseUrl}countries`)
  }
  getStates(countryId:number)
  {
    return this.http.get(`${this.baseUrl}states/${countryId}`)
  }
  getCities(stateId:number)
  {
    return this.http.get(`${this.baseUrl}cities/${stateId}`)
  }
  getEmail(email:any)
  {
    return this.http.get(`${this.baseUrl}emailcheck/${email}`,{responseType:'text'})
  }
  unlockAc(body:any)
  {
    return this.http.post(`${this.baseUrl}unlock`,body,{responseType:'text'})
  }

  forgotPwd(email:any)
  {
    return this.http.get(`${this.baseUrl}forgotPwd/${email}`,{responseType:'text'})
  }
}
