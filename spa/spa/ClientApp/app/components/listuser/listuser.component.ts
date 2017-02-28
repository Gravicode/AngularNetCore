import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'listuser',
    templateUrl: './listuser.component.html'
})
export class ListUserComponent {
    public datas: Array<UserData>;
    http:Http;
    constructor(http: Http) {
         this.http=http;
    }
    generateData(){
        this.http.get('/api/User/GetUsers').subscribe(result => {
            this.datas = result.json() as UserData[];
        });
    }
}

interface UserData {
    nama: string;
    age: number;
    weight: number;
    height: number;
}
