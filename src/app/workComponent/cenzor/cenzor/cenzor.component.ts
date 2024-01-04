import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cenzor',
  standalone: true,
  imports: [ FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './cenzor.component.html',
  styleUrl: './cenzor.component.css'
})
export class CenzorComponent {
  public mainBlock: string = 'mn-block';
  public mainBlock1: string = 'mn-words';
  public mainBlock2: string = 'mn-bad-words';
  public mainBlock3: string = 'mn-bad-words1';
  public mainText: string = 'mn-first-area';
  public mainButton: string = 'mn-btn';
  public mainButton1: string = 'mn-btn, mn-btn-1';
  public secondTextArea: string = 'mn-second';
  public lastButton: string = 'mn-last-btn';
  public badWords: string = '';
  public badWords1: string[] = [];
  public badWordsDiv: string = '';
  public customPlaceholder: string = 'word here...';
  public areaPlaceholder: string = 'text here...'

  public someProText: string = '';
  constructor() { }
  ngOnInit(): void {

  }
  addWord() {

    if (this.badWords != '') {
      this.badWords1.push(this.badWords);
      this.badWordsDiv = this.badWords1.join(' ');
      this.badWords = '';

    }
    else {
      this.customPlaceholder = 'Please write a word!';
      this.mainText = 'mn-first-area-change';
    }
  }
  removeWord() {
    this.badWordsDiv = '';
    this.someProText = '';
  }
  checkWord() {
    if (this.someProText != '') {
      let badWordsArea = this.someProText.split(' ');
      for (let i = 0; i < badWordsArea.length; i++) {
        for (let a = 0; a < this.badWords1.length; a++) {
          if (badWordsArea[i] === this.badWords1[a]) {
            badWordsArea[i] = '*'.repeat(badWordsArea[i].length);
          }
        }
      }
      const censoredText = badWordsArea.join(' ');
      this.someProText = censoredText;
    }
    else {
      this.areaPlaceholder = 'Please write a text!';
      this.secondTextArea = 'mn-second_2';
    }


  }
}
