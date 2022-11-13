import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/questions_quizz.json";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  title: string = ''
  questions: any;
  questionSelected: any;
  answers: string[] = []
  answerSelected: string = '';
  questionIndex: number = 0;
  questionMaxIndex: number = 0;
  finished: boolean = false;
  answersA: number = 0;
  answersB: number = 0;
  result: string = '';

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false;
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];
      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value: string){
    this.answers.push(value);
    this.nextQuestion();
  }

  nextQuestion(){
    this.questionIndex++;
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }else{
      this.finished = true;
    }
    this.answers.map((e) => {
      if(e == 'A'){
        this.answersA++;
      }else{
        this.answersB++;
      }
    })
    if(this.answersA > this.answersB){
      this.result = quizz_questions.results.A;
    }else{
      this.result = quizz_questions.results.B;
    }
  }

}
