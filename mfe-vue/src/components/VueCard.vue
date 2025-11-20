<script setup lang="ts">
import { ref } from 'vue'

type Props = { inputMessage: string }

type Emits = {
  (e: 'sendMessage', message: string): void
}

const props = withDefaults(defineProps<Props>(), {
  inputMessage: 'Hello from Vue!',
})

const emit = defineEmits<Emits>()

const count = ref(0)

function increaseCount() {
  count.value++
}

function sendMessageToHost() {
  emit('sendMessage', props.inputMessage)
}
</script>

<template>
  <div class="card">
    <h1>Vue Card</h1>
    <p>This is a Vue card</p>
    <p>Input message: {{ props.inputMessage }}</p>
    <p>Count: {{ count }}</p>
    <button @click="increaseCount">Increase count</button>
    <button @click="sendMessageToHost">Send message to host</button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  background-color: #ddffdd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
