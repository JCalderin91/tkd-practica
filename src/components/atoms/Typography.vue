<script setup>

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'p'
  },
  type: {
    type: [String, Object],
    default: 'body'
  }

})

</script>

<template>
  <component :is="props.as"
    :class="[props.type === 'title' && 'text-xl font-semibold', props.type === 'body-sm' && 'font-semibold text-gray-600', props.type === 'body' && 'font-semibold text-lg']">
    <slot />
  </component>
</template>
