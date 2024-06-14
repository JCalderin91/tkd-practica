<script setup>

defineProps({
  msg: String,
})

</script>

<template>
  <button
    class="bg-blue-700 text-white rounded-md min-h-[32px] px-6 py-2 font-semibold hover:bg-blue-800 shadow-md active:shadow-none ease-in-out duration-300 shadow-slate-400 transition-all">
    <slot />
  </button>
</template>
