import { Injectable } from '@angular/core';
import {
  createInstance,
  ModuleFederation,
} from '@module-federation/enhanced/runtime';

@Injectable({
  providedIn: 'root',
})
export class RemoteLoader {
  instance: ModuleFederation;

  constructor() {
    this.instance = createInstance({
      name: 'mfeAngular',
      remotes: [
        {
          name: 'mfeVue',
          entry: 'http://localhost:5173/remoteEntry.js',
          type: 'module',
        },
      ],
    });
  }

  loadRemote(remoteName: string) {
    return this.instance.loadRemote(remoteName);
  }
}
