<script setup lang="ts">
defineProps({
  title: String,
  button: Boolean,
  to: String,
})
</script>

<template>
  <div class="my-8">
    <div class="flex justify-between items-center">
      <VText variant="display-sm" font-weight="semibold">
        {{ title }}
      </VText>
      <VBtn v-show="button" color="morning-glory" prefix-icon="mingcute:back-line" :to="to">
        Back
      </VBtn>
    </div>
    <VText color="gray.500">
      <slot />
    </VText>
  </div>
</template>
