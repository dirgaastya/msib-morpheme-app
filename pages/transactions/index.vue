<script setup lang="ts">
import type { VDataTableHeader } from '@morpheme/table'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

definePageMeta({
  breadcrumbs: [
    {
      title: 'Transactions',
      to: '/transactions',
    },
  ] as VBreadcrumbItemProps[],
})
const selectedTab = ref(0)

const headers = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'Order Number',
  },
  {
    value: 'name',
    text: 'Product Name',
  },
  {
    value: 'age',
    text: 'Quantity',
  },
  {
    value: 'state',
    text: 'Phone Number',
  },
  {
    value: 'email',
    text: 'Address',
  },
])

const tabs = ref([
  {
    text: 'Pending',
  },
  {
    text: 'Sending',
  },
  {
    text: 'Complete',
  },
])
</script>

<template>
  <ContentHeader title="Transactions">
    Monitor your transaction here
  </ContentHeader>
  <VCard>
    <VTabs v-model="selectedTab" color="morning-glory" :items="tabs" />
    <VText font-weight="semibold" variant="xl" class="my-3">
      {{ tabs[selectedTab].text }}
    </VText>
    <VDataTable v-show="selectedTab === 0" :items="[]" :headers="headers" />
    <VDataTable v-show="selectedTab === 1" :items="[]" :headers="headers" />
    <VDataTable v-show="selectedTab === 2" :items="[]" :headers="headers" />
  </VCard>
</template>
