import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(public lang: LanguageService) {}
  get photos() {
    return [
      {
        url: 'assets/images/1.JPG',
        caption: this.lang.t().g1,
        colSpan: 'col-span-2'
      },
      {
        url: 'assets/images/2.JPG',
        caption: this.lang.t().g2,
        colSpan: 'col-span-2'
      },
      {
        url: 'assets/images/3.JPG',
        caption: this.lang.t().g3,
        colSpan: 'col-span-1'
      },
      {
        url: 'assets/images/4.jpg',
        caption: this.lang.t().g4,
        colSpan: 'col-span-1'
      }
    ];
  }
}
