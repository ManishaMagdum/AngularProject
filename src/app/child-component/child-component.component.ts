import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Input() dataInput:string;
@Output() foodEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('Input data from parent',this.dataInput)
  }
  addToFood() {
    this.foodEvent.emit('Banana');
  }
}
