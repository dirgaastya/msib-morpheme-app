<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'
import { useProductStore } from '~/stores/product'
import { headers } from '~/types/product'

const useProduct = useProductStore()

definePageMeta({
  breadcrumbs: [
    {
      title: 'Products',
      to: '/products',
    },
  ] as VBreadcrumbItemProps[],
})

onMounted(() => {
  if (useProduct.products.length === 0)
    useProduct.getProducts()
})
</script>

<template>
  <ContentHeader title="Products">
    Manage your products here
  </ContentHeader>
  <VCard>
    <div class="flex items-center justify-between mb-6">
      <VInput
        prepend-icon="ri:search-line"
        placeholder="Search..."
      />
      <VBtn prefix-icon="tabler:plus" to="/products/create">
        Add Item
      </VBtn>
    </div>
    <VDataTable :loading="useProduct.loading" :items="useProduct.products" :headers="headers">
      <template #item.thumbnail="{ item }">
        <img
          :src="item.thumbnail"
          class="w-12 h-12 object-cover rounded shadow"
        >
      </template>
      <template #item.price="{ item }">
        {{
          item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        }}
      </template>
      <template #item.id="{ item }">
        <DataTableProductAction :id="item.id" />
      </template>
    </VDataTable>
  </VCard>
</template>

<style scoped>

</style>
