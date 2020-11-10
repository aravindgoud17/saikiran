import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  signinData={
    firstName :'',
    lastName :'',
    email :'',
    password:'',
  };
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$')]),
    // password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}')]),
    // confirmPassword: new FormControl('',[Validators.required]),
  })

  constructor(privatefrombuilders: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
      console.warn(this.profileForm.value);
  }
  alert() {
    // alert("thankyou for registration")
    this.signinData=(this.signinData,this.profileForm.value);
    localStorage.setItem("form",JSON.stringify(this.signinData));
    console.log(localStorage.getItem("form"));
   

  }
  // formValue = JSON.parse(localStorage.getItem('form-data'))
  

}


