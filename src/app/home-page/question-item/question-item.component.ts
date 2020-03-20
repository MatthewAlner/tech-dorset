import { Component, Input, OnInit } from '@angular/core';
import { IQuestionandAnswer } from '../../models/qa-item';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styles: []
})
export class QuestionItemComponent implements OnInit {

  @Input() qaItem: IQuestionandAnswer;

  constructor() { }

  ngOnInit(): void {
  }

}
