import { ChatMessage } from 'src/app/models/chat-message';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService) {

  }

  ngOnInit(): void {
    this.chatService.joinRoom("ABC");
  }

  sendMessage() {
    const chatMessage = {
      message: "Hello World!",
      user: "1"
    } as ChatMessage;
    this.chatService.sendMessage("ABC", chatMessage);
  }
}
