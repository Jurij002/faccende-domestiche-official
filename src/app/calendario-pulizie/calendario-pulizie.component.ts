import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario-pulizie',
  standalone: true,
  imports: [],
  templateUrl: './calendario-pulizie.component.html',
  styleUrl: './calendario-pulizie.component.scss'
})
export class CalendarioPulizieComponent {
  constructor(private http: HttpClient) {}

}
