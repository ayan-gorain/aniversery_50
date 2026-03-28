import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [],
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent {
  eventDate = 'Thursday, April 16th, 2026';
  eventTime = '5:00 PM onwards';
  eventLocation = 'The Golden Manor';
  eventAddress = '123 Anniversary Lane, Love City, NY 10001';
}
