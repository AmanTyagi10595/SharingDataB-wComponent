import { Component } from '@angular/core';
import { SharedService } from "./shared.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle :boolean = true;
  message :string = ""
  title = 'sharingData';
 public parentMessage = "message from parent to child 1";
 constructor(private sharedService: SharedService) { }
 receiveMessage($event) {
  this.message = $event
}
newMessage() {
  if(this.toggle){
    this.sharedService.nextMessage("Second Message")
  }
  else{
    this.sharedService.nextMessage("first Message")
  }
  this.toggle= !this.toggle
}
}
