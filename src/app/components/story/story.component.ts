import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  constructor(public lang: LanguageService) {}

  get timeline() {
    return [
      {
        year: this.lang.t().metYear,
        title: this.lang.t().metTitle,
        description: this.lang.t().metDesc
      },
      {
        year: this.lang.t().wedYear,
        title: this.lang.t().wedTitle,
        description: this.lang.t().wedDesc
      },
      {
        year: this.lang.t().famYear,
        title: this.lang.t().famTitle,
        description: this.lang.t().famDesc
      },
      {
        year: this.lang.t().today,
        title: this.lang.t().legTitle,
        description: this.lang.t().legDesc
      }
    ];
  }
}
