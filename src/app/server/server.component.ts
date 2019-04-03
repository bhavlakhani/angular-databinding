import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowNewServer = false;
serverCreationStatus = "no server created yet";
serverName= "TestServer"

  constructor() {
    setTimeout(() =>
    {
this.allowNewServer =true;
    },3000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus ="server was created!!! Name is " + this.serverName;
  }

  onUpdateserver(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
