<script setup lang="ts">
interface IMetrics {
  title: string
  icon: string
  value: string
  footer: string
}
defineProps({
  metric: {
    type: Object as () => IMetrics,
    default: () => ({} as IMetrics),
  },
})
</script>

<template>
  <VCard>
    <template #header>
      <div class="w-full flex items-center justify-between">
        <VText font-weight="semibold">
          {{ metric.title }}
        </VText>
        <VIcon :name="metric.icon" />
      </div>
    </template>
    <VText variant="display-xs" font-weight="semibold">
      {{ metric.value }}
    </VText>
    <VText>{{ metric.footer }}</VText>
  </VCard>
</template>
