import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-binding',
  templateUrl: './assign-binding.component.html',
  styleUrls: ['./assign-binding.component.css']
})
export class AssignBindingComponent implements OnInit {
Name :string;
reset(){
  this.Name='';
}

  constructor() { }

  ngOnInit() {
  }

}
