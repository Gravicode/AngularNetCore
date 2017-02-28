import { Component, ViewChild } from '@angular/core';
import { ListUserComponent } from './listuser.component';

@Component({
  selector:'masteruser',
  templateUrl: './masteruser.component.html'
})
export class MasterUserComponent {
  @ViewChild(ListUserComponent) listUser: ListUserComponent

  constructor() { }

  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.update();
  }

  generateData(){
      this.update();
  }

  update() {
    this.listUser.generateData();
  }
}