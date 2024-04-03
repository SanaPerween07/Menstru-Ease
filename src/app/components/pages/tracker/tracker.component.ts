import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [MatDatepickerModule, CommonModule, MatInputModule, MatFormField, MatNativeDateModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {
  count: number=0;
  counter(action:string){
    if(action==='+'){
      this.count++;
    }
    else if(action==='-'){
      this.count--;
    }
  }
  count1: number=0;
  counter1(action:string){
    if(action==='+'){
      this.count1++;
    }
    else if(action==='-'){
      this.count1--;
    }
  }
}
