<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

defineProps({
  metric: {
    type: Object as () => IMetrics,
    default: () => ({} as IMetrics),
  },
})
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm')
interface IMetrics {
  title: string
  icon: string
  value: string
  footer: string
}
</script>

<template>
  <VCard>
    <template #header>
      <div class="w-full flex items-center justify-between">
        <VText :variant="isMobile ? 'xs' : 'md'" font-weight="semibold">
          {{ metric.title }}
        </VText>
        <VIcon :name="metric.icon" />
      </div>
    </template>
    <VText :variant="isMobile ? 'md' : 'display-xs'" font-weight="semibold">
      {{ metric.value }}
    </VText>
    <VText :variant="isMobile ? 'xs' : 'sm'" color="gray.400">
      {{ metric.footer }}
    </VText>
  </VCard>
</template>
