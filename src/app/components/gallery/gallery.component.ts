import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  photos = [
    {
      url: 'assets/images/1.JPG',
      caption: 'A young boy...',
      colSpan: 'col-span-1'
    },
    {
      url: 'assets/images/2.JPG',
      caption: '...and a young girl,',
      colSpan: 'col-span-1'
    },
    {
      url: 'assets/images/3.JPG',
      caption: 'Who met...',
      colSpan: 'col-span-1'
    },
    {
      url: 'assets/images/4.jpg',
      caption: '...and created a history of love.',
      colSpan: 'col-span-1'
    }
  ];
}
