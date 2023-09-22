<script setup lang="ts">
interface NavItems {
  name: string
  to: string
  icon: string
}
const items: NavItems[] = [
  {
    name: 'Home',
    to: '/',
    icon: 'ri:home-2-line',
  },
  {
    name: 'Products',
    to: '/products',
    icon: 'icon-park-outline:ad-product',
  },
  {
    name: 'Transactions',
    to: '/transactions',
    icon: 'uil:transaction',
  },
]
</script>

<template>
  <VList>
    <VListItem
      v-for="(item, index) in items"
      :key="index"
      :prepend-icon="item.icon"
      hide-append
      :to="item.to"
      default-class="text-md"
    >
      {{ item.name }}
    </VListItem>
  </VList>
</template>
