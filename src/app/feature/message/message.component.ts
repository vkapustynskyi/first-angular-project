import {MessageService} from "../../shared/heroes/service/message.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  constructor(public messageService: MessageService) {
  }

  ngOnInit() {

  }

}
