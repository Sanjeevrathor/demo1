import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Authmodule } from '../authmodule';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  form:FormGroup
  message:string
  title:string;
  userLoginModel:Authmodule[]=[];
  constructor(private _auth:AuthService) { }
  
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),

    })
    this.title = localStorage.getItem("taken")
  }
  add(){
    this.title = 'this is the video of localstragae';
    localStorage.setItem("token",this.title)
  }
  get f() { return this.form.controls; }

  logmform(){
  let val =  this.form.value;
  
    this._auth.userLogin().subscribe(()=>{
     let resutl = this.userLoginModel.filter(x=>x.email == x.email && x.password == x.password)
      
     
      if(resutl.length>0){
        this.message = "success"
      }
      else{
        this.message = "invali"
      }
    })
  }
}
