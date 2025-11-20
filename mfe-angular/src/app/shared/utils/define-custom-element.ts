import { Type } from '@angular/core';
import { createCustomElement, NgElementConfig } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { appConfig } from '../../app.config';

export async function defineCustomElement<T>(
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
