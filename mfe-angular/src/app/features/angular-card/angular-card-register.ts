import { createApplication } from '@angular/platform-browser';
import { AngularCard } from './angular-card';
import { appConfig } from '../../app.config';
import { createCustomElement, NgElementConfig } from '@angular/elements';
import { Type } from '@angular/core';

defineCustomElement('angular-card', AngularCard);

async function defineCustomElement<T>(
  name: string,
  component: Type<T>,
  options?: NgElementConfig
) {
  const app = await createApplication(appConfig);
  const injector = app.injector;

  if (injector) {
    const element = createCustomElement(component, { ...options, injector });
    customElements.define(name, element);
  }
}
