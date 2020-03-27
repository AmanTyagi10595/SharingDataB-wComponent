import { Component, OnInit,Output, Input, EventEmitter} from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  message: string = "message from child to parent";
  message2:string ="";
  @Input() parentMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message2 = message)
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
