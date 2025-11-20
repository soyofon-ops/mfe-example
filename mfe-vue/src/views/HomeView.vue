<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VueCard from '@/components/VueCard.vue'
import { useRemoteLoader } from '@/plugins/remote-loader/use-remote-loader'

const inputMessage = ref('Hello from Vue!')

const { instance } = useRemoteLoader()

onMounted(() => {
  instance?.loadRemote('mfeAngular/angular-card')
})

function debugVueCardEvent(message: string) {
  console.log(message)
}

function debugAngularCardEvent(event: CustomEvent<string>) {
  console.log(event.detail)
}
</script>

<template>
  <main>
    <div>
      <input type="text" v-model="inputMessage" />
    </div>

    <VueCard :input-message="inputMessage" @sendMessage="debugVueCardEvent" />

    <angular-card :input-message="inputMessage" @sendMessage="debugAngularCardEvent" />
  </main>
</template>
