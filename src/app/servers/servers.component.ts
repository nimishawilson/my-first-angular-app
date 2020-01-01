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
servers = ['test server', 'test server 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

onCreateServer(){
  this.servers.push(this.serverName);
 this.serverstat = true;
}
}
