import { Component, model, signal } from '@angular/core';
import { AngularCard } from '../../features/angular-card/angular-card';
import { VueCard } from '../../features/remote/vue-card/vue-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, AngularCard, VueCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly inputMessage = model<string>('Hello from Angular!');

  debugAngularCardEvent(event: string) {
    console.log(event);
  }

  debugVueCardEvent(event: string) {
    console.log(event);
  }
}
