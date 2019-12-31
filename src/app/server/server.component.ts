import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'online';
  vehicle: string = 'car';
  color: string = 'red';

  getVehicleColor(){
    return this.color;
  }
}
