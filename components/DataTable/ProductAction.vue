<script setup lang="ts">
import { useProductStore } from '~/stores/product'

const { id } = defineProps({
  id: Number,
})

const useProduct = useProductStore()

const isOpen = ref(false)

function modalHandler(): void {
  isOpen.value = !isOpen.value
}

function deleteProduct(id: number): void {
  useProduct.removeProduct(id)
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="flex items-center justify-center">
    <VBtn text>
      <VIcon size="xs" name="clarity:eye-show-line" />
    </VBtn>
    <VBtn text>
      <VIcon size="xs" name="lucide:pen" />
    </VBtn>
    <VBtn text @click="modalHandler">
      <VIcon size="xs" name="heroicons:trash" />
    </VBtn>
  </div>
  <VModal v-model="isOpen" confirm hide-x-button @confirm="deleteProduct(id)">
    Hello World {{ id }}
  </VModal>
</template>
