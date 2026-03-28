import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  timeline = [
    {
      year: '1974',
      title: 'How They Met',
      description: 'A chance encounter that sparked a 50-year romance. It all started with a simple hello and a shared cup of coffee.'
    },
    {
      year: '1976',
      title: 'The Wedding Day',
      description: 'Surrounded by family and friends, they exchanged rings and promises, beginning their lifelong journey together.'
    },
    {
      year: '1980s',
      title: 'Building a Family',
      description: 'Welcoming their wonderful children into the world. A house filled with laughter, love, and a few sleepless nights.'
    },
    {
      year: 'Today',
      title: 'A Golden Legacy',
      description: 'Fifty years later, their love stands stronger than ever, an inspiration to their children and grandchildren.'
    }
  ];
}
