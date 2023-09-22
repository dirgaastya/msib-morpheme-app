<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div class="my-8">
    <VText variant="display-sm" font-weight="semibold">
      {{ title }}
    </VText>
    <VText>
      <slot />
    </VText>
  </div>
</template>
