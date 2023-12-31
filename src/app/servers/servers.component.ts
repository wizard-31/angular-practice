import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers' #can be used when component is used as a class like in CSS
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No Server was created!';
  serverName: string = 'Testserver';
  serverCreated: boolean = false;
  servers: string[] = ['Testserver', 'Testserver 2'];
  serverCount: number = this.servers.length;

constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
 }

ngOnInit(): void {
}

onCreateServer() {
  this.serverCreationStatus = 'A new Server was just created! with name ' + this.serverName;
  this.serverCount++;
  this.servers.push(this.serverName);
  this.serverCreated = true;
  console.log(this.servers);
}

onServerNameUpdate(event:Event) {
  // console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
