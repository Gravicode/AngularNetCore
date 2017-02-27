import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'monitoring',
    templateUrl: './monitoring.component.html'
})
export class MonitoringComponent {
    public datas: SensorData[];
    http: Http;
    constructor(http: Http) {
        this.http = http;
        this.loadData();
    }

    refreshData() {
        this.loadData();
    }

    loadData() {
        this.http.get('/api/Sensor/GetSensors').subscribe(result => {
            this.datas = result.json() as SensorData[];
        });
    }
}

interface SensorData {
    tanggal: string;
    temp: number;
    light: number;
    humid: number;
}
