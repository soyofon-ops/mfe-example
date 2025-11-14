import {
  Component,
  inject,
  Injector,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-angular-card',
  imports: [],
  templateUrl: './angular-card.html',
  styleUrl: './angular-card.scss',
})
export class AngularCard {
  readonly inputMessage = input<string>();

  readonly sendMessage = output<string>();

  injector = inject(Injector);

  count = signal(0);

  increaseCount() {
    this.count.update((count) => count + 1);
  }

  sendMessageToHost() {
    this.sendMessage.emit(`Hello from Angular Card! ${this.inputMessage()}`);
  }
}
