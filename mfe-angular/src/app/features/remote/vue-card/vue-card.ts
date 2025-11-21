import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  output,
} from '@angular/core';
import { RemoteLoader } from '../remote-loader';

@Component({
  selector: 'app-vue-card',
  imports: [],
  templateUrl: './vue-card.html',
  styleUrl: './vue-card.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VueCard {
  readonly inputMessage = input<string>();

  readonly sendMessage = output<string>();

  private remoteLoader = inject(RemoteLoader);

  constructor() {
    this.remoteLoader.loadRemote('mfeVue/vue-card');
  }

  remoteSendMessage(event: Event) {
    this.sendMessage.emit((event as CustomEvent<string[]>).detail[0]);
  }
}
