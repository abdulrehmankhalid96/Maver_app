import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  public array=['aaaaaaaaaaa','bbbbbbbbb','cccccccccc','dddddddddd','eeeeeeeeee','fffffffffff','ggggggggg',
  'hghhhhhhhhh','iioooioioooiooi'];
  ngOnInit(): void {
  }

}
