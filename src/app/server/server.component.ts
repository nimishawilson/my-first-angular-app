import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{ color:white;}`]
})
export class ServerComponent {

  serverId: number = 10;
 serverStatus: string = 'online';
  vehicle: string = 'car';
  color: string = 'red';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getVehicleColor(){
    return this.color;
  }
  getColor(){
    return this.serverStatus === 'online'  ? 'green' : 'red';
  }
}
