import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IQuestionandAnswer } from '../../models/qa-item';

@Component({
  selector: 'app-qa-section',
  templateUrl: './qa-section.component.html',
  styles: []
})
export class QaSectionComponent implements OnInit {

  public questionsAndAnswers: IQuestionandAnswer[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.questionsAndAnswers = this.dataService.getQuestionsAndAnswers();
  }

}
