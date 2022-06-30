<script setup lang="ts">
import { ref } from 'vue';
import { CustomInput } from './components/CustomInput';

const q = ref('')
const hx = (...args) => {
  console.log('in app', args)
}
</script>

<template>
  <CustomInput v-model="q" @input="hx"></CustomInput>
  {{ q }}
</template>
