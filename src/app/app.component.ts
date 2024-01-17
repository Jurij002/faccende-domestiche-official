import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalendarioPulizieComponent } from "./calendario-pulizie/calendario-pulizie.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, CalendarioPulizieComponent]
})
export class AppComponent {
  title = 'faccende-domestiche-official';
}
