import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
//import { UserService } from '../../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup
  ngOnInit(): void {
  }
  constructor(private fb:FormBuilder, private http:HttpClient, private router: Router ){
    this.loginForm=this.fb.group({
      email:['', Validators.required, Validators.email],
      password:['', Validators.required]
    })
  }

  login(){
      this.http.post('http://localhost:3000/login', this.loginForm.value).subscribe((res:any)=>{
       console.log(res)
       this.router.navigateByUrl('/dashboard')

      })
  }

}
