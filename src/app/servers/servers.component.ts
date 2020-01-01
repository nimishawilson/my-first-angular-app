import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

allowNewServers = false;
serverCreationStatus = 'no server was created';
serverName = 'testserver';
serverstat: boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

onCreateServer(){
 this.serverstat = true;
}
}
