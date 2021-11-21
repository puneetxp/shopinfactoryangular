import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnChanges {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  Login(){

  }

  constructor() { }
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
// export class FormFieldPrefixSuffixExample {
//   hide = true;
// }