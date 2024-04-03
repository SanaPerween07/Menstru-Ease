import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent {

}
