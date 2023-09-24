<script setup lang="ts">
interface IMetrics {
  title: string
  icon: string
  value: string
  footer: string
}

const metrics: IMetrics[] = [
  {
    title: 'Total Revenue',
    icon: 'dashicons:money-alt',
    value: '$45,231.89',
    footer: '+20.1% from last month',
  },
  {
    title: 'Transactions',
    icon: 'tdesign:undertake-transaction',
    value: '+2350',
    footer: '+180.1% from last month',
  },
  {
    title: 'Categories',
    icon: 'iconamoon:category-light',
    value: '142',
    footer: '+19% from last month',
  },
  {
    title: 'Total Revenue',
    icon: 'iconoir:cancel',
    value: '2',
    footer: '+0,0002% since last hour',
  },
]
</script>

<template>
  <ContentHeader title="Dashboard">
    Monitor your metrics for shipping, transactions, product and many more in here
  </ContentHeader>
  <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-x-6">
    <MonitorCard v-for="(metric, index) in metrics" :key="index" :metric="metric" />
  </div>
</template>
