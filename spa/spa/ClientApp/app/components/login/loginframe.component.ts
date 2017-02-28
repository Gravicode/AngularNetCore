import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';


@Component({
  selector: 'loginframe',
  templateUrl: './loginframe.component.html'
})
export class LoginFrameComponent {
  public currentDate:string;
  constructor() {
     var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
     this.currentDate=utc; 
  }
  handleLoggedOn(user) {
    // Handle the event
    alert(user.email);
  }

  ngOnInit() {
    console.log('state - init');
  }
  ngOnDestroy() {
    console.log('state - destroy');
  }
  ngDoCheck() {
    console.log('state - do check');
  }
  ngOnChanges(changes) {
    console.log('state - on changes');
  }
  ngAfterContentInit() {
    console.log('state - after content init');
  }
  ngAfterContentChecked() {
    console.log('state - after content checked');
  }
  ngAfterViewInit() {
    console.log('state - after view init');
  }
  ngAfterViewChecked() {
    console.log('state - after view checked');
  }
}