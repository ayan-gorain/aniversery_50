import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [CountdownComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(public lang: LanguageService) {}
}
