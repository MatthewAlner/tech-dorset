import { Injectable } from '@angular/core';
import { IHost } from '../models/host';
import { IActivity } from '../models/activity';
import { IQuestionandAnswer } from '../models/qa-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public getHosts() {
    const hosts: IHost[] = [];
    hosts.push({name: 'Matt', imageURL: 'assets/hosts/matt.jpg'});
    hosts.push({name: 'Chris', imageURL: 'assets/hosts/default.svg'});
    hosts.push({name: 'Tom', imageURL: 'assets/hosts/default.svg'});
    hosts.push({name: 'Dave', imageURL: 'assets/hosts/default.svg'});
    hosts.push({name: 'Alex', imageURL: 'assets/hosts/default.svg'});
    return hosts;
  }

  public getActivities() {
    const activity: IActivity[] = [];
    activity.push({colour: 'green', icon: 'faChalkboardTeacher', title: 'Talks', description: 'we have talks'});
    activity.push({colour: 'red', icon: 'faPizzaSlice', title: 'Pizza', description: 'we have pizza'});
    activity.push({colour: 'blue', icon: 'faProjectDiagram', title: 'Networking', description: 'we have networking'});
    return activity;
  }

  public getQuestionsAndAnswers() {
    const questionsAndAnswers: IQuestionandAnswer[] = [];
    questionsAndAnswers.push({question: `Will there be food and drinks`, answer: `Yes! Thanks to the unrelenting and incredible support from our sponsors we can provide free pizza and refreshments`});
    questionsAndAnswers.push({question: `Does it matter if I'm late`, answer: 'You are welcome to join us at anytime during the event. If a presentation is in progress, we ask you to quietly join us so that the talk is not disrupted.'});
    questionsAndAnswers.push({question: `How often do you hold events`, answer: `Events are held every second Monday of the month in the EBC`});
    questionsAndAnswers.push({question: `What time should I arrive`, answer: `doors open at 6:15 we kick of at 6:30`});
    return questionsAndAnswers;
  }
}
