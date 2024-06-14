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
    :class="[props.type === 'title' && 'text-xl font-semibold text-slate-700', props.type === 'body-sm' && 'text-md italic font-semibold text-gray-600', props.type === 'body' && 'font-bold text-xl']">
    <slot />
  </component>
</template>
