import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  constructor() { }

  @Input() makeItShort: boolean;

  ngOnInit(): void {
  }

}
