import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  // parentMessage = "tetsing messages"
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }
  newMessage() {
    this.sharedService.nextMessage("Second Message")
  }
}
