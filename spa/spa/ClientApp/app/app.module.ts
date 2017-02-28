import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFrameComponent } from './components/login/loginframe.component';
import { MasterUserComponent } from './components/listuser/masteruser.component';
import { ListUserComponent } from './components/listuser/listuser.component';
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        MonitoringComponent,
        LoginComponent,
        LoginFrameComponent,
        MasterUserComponent,
        ListUserComponent,
        HomeComponent
    ],
    imports: [

        ReactiveFormsModule,
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'monitoring', component: MonitoringComponent },
            { path: 'loginframe', component: LoginFrameComponent },
             { path: 'masteruser', component: MasterUserComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
