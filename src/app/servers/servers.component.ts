import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  username = ''; 
  serverName = '';
  serverCreationStatus = 'No Server Created!';
  constructor() {
    setTimeout(( ) => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created and the Name is ' + this.serverName;
  }
  ngOnInit() {
  }
  onUpdateServerName(event: Event) {
   console.log(this.serverName);
  }
  onReset() {
  this.username = '';
  }
}
