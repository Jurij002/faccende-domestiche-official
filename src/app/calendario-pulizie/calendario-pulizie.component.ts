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

  updateStatus(): void {
    const taskId = "123"; // Sostituisci con l'id del tuo task
    this.http.post('/.netlify/functions/updateStatus', { taskId })
      .subscribe(response => {
        console.log(response);
        // Gestisci la risposta, ad esempio, aggiorna l'interfaccia utente
      });
  }
}
