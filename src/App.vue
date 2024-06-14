<script setup>
import Techniques from '@components/organisms/Techniques.vue';
import Vocabulary from '@components/organisms/Vocabulary.vue';
import Spacer from './components/atoms/Spacer.vue';
</script>

<template>
  <section class="flex h-dvh flex-col justify-around items-center">
    <Techniques />
    <Spacer />
    <Vocabulary />
  </section>
</template>
