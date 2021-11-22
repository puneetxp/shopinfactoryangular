import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  SignUp(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
