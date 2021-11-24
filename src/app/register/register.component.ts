import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Authmodule } from '../authmodule';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup
  register:Authmodule = new Authmodule();
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),

    })
  }
  userRegiser(){
     console.log(this.form.value);
    //  this.register.firstName=this.form.get('firstName').value;
    //  this.register.lastName=this.form.get('lastName').value;
    //  this.register.email=this.form.get('email').value;
    //  this.register.password=this.form.get('password').value;
     this.auth.registPost(this.form.value).subscribe((res)=>{
       console.log(res)
     })
      
  }
}
