<script setup lang="ts">
import { useProductStore } from '~/stores/product'

const { id } = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const useProduct = useProductStore()
const deleteModal = ref(false)
const detailModal = ref(false)

function deleteProduct(id: number): void {
  useProduct.removeProduct(id)
  deleteModal.value = !deleteModal.value
}

function showDetailProduct(id: number): void {
  detailModal.value = true
  useProduct.getSingleProduct(id)
}
</script>

<template>
  <div class="flex items-center justify-center">
    <VBtn
      icon
      fab
      color="morning-glory-icon"
      @click="showDetailProduct(id)"
    >
      <VIcon size="xs" name="clarity:eye-show-line" />
    </VBtn>
    <VBtn
      icon
      fab
      color="warning-icon"
      :to="`products/edit/${id}`"
    >
      <VIcon size="xs" name="lucide:pen" />
    </VBtn>
    <VBtn
      icon
      fab
      color="error-icon"
      @click="deleteModal = !deleteModal"
    >
      <VIcon size="xs" name="heroicons:trash" />
    </VBtn>
  </div>
  <VModal
    v-model="deleteModal"
    hide-x-button
    confirm
    confirm-color="error"
    @confirm="deleteProduct(id)"
  >
    Are you sure want to delete this product?
  </VModal>
  <VModal
    v-model="detailModal"
    hide-footer
    width="100%"
  >
    <VText v-if="useProduct.loading">
      Loading...
    </VText>
    <VRow v-else>
      <VCol class="w-full h-96 pe-8">
        <img :src="useProduct.product.thumbnail" class="w-full h-full rounded-lg object-cover">
      </VCol>
      <VCol class="space-y-6">
        <div class="space-y-3">
          <VText variant="display-md" class="capitalize" font-weight="semibold">
            {{ useProduct.product.title }}
          </VText>
          <VText variant="lg" font-weight="semibold">
            {{ useProduct.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
          </VText>
        </div>
        <VText class="capitalize" font-weight="semibold">
          {{ useProduct.product.category }}
        </VText>
        <div class="space-y-3 overflow-y-scroll">
          <VText font-weight="semibold">
            Description
          </VText>
          <VText color="gray.500" v-html="useProduct.product.description" />
        </div>
      </VCol>
    </VRow>
  </VModal>
</template>
