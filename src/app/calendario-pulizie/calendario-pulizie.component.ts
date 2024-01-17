import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario-pulizie',
  standalone: true,
  imports: [],
  templateUrl: './calendario-pulizie.component.html',
  styleUrl: './calendario-pulizie.component.scss'
})
export class CalendarioPulizieComponent {

  async eseguiFunzione() {
    try {
      const taskId = 123; // Sostituisci con il valore appropriato
      const status = 'fatto'; // Sostituisci con il valore appropriato

      const response = await fetch('/.netlify/functions/updateStatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, status }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Funzione eseguita con successo:', result);
      } else {
        console.error('Errore durante l\'esecuzione della funzione:', result);
      }
    } catch (error) {
      console.error('Errore durante l\'esecuzione della funzione:', error);
    }
  }
}
