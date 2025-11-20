import { defineCustomElement, type App } from 'vue'
import VueCard from './VueCard.vue'
import { createPinia } from 'pinia'

const VueCardElement = defineCustomElement(VueCard, {
  shadowRoot: false,
  configureApp: (app: App) => {
    app.use(createPinia())
  },
})

class CustomVueCardElement extends VueCardElement {
  connectedCallback() {
    super.connectedCallback()
  }
}

customElements.define('vue-card', CustomVueCardElement)
