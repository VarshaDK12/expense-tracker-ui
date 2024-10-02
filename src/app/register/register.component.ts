import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm:FormGroup
  ngOnInit(): void {
  }
  constructor(private fb:FormBuilder, private http:HttpClient ){
    this.registerForm=this.fb.group({
      fname:['', Validators.required],
      lname:['', Validators.required],
      email:['', Validators.required, Validators.email],
      password:['', Validators.required]
    })
  }

  register(){
      this.http.post('http://localhost:3000/register', this.registerForm.value).subscribe((res:any)=>{
       console.log(res)
      
      })
  }

}
