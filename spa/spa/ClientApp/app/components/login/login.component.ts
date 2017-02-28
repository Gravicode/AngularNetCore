import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
   @Input() tanggal:string;
   @Output() userLoggedOn = new EventEmitter<string>();
  public loginForm = this.fb.group({
    email: ["", this.containsMagicWord],
    password: ["", Validators.required]
  });
  constructor(public fb: FormBuilder) {}
  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
    this.userLoggedOn.emit(this.loginForm.value);
  }

  containsMagicWord(c: FormControl):Object {
  if(c.value.indexOf('magic') >= 0) {
    console.log('not valid')
    return {
      noMagic: true
    }
  }

  // Null means valid, believe it or not
  console.log('valid')
  return null
}

}