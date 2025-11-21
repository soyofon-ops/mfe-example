import { Type } from '@angular/core';
import { createCustomElement, NgElementConfig } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { appConfig } from '../../app.config';

/**
 * 定義自定義元素
 * @param name 自定義元素的名稱
 * @param component 要註冊的 Angular 組件
 * @param options 自定義元素的選項
 */
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
