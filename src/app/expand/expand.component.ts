import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss']
})
export class ExpandComponent implements OnInit {
  step = 0;
  constructor() { }

  ngOnInit() {
    if ( localStorage.getItem('expandIndex') != null ) {
      this.step = Number(localStorage.getItem('expandIndex'));
    }
  }

  setStep(index: number) {
    localStorage.setItem('expandIndex', index.toString());
    this.step = index;
  }

  prevStep() {
    this.step++;
    localStorage.setItem('expandIndex', this.step.toString());
  }

  nextStep() {
    this.step--;
    localStorage.setItem('expandIndex', this.step.toString());
  }

}
