<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'
import { mixed, number, object, string } from 'yup'
import { useForm } from 'vee-validate'
import VEditor from '@morpheme/editor'
import { useProductStore } from '~/stores/product'

const image = ref('')
const title = ref('')
const category = ref('')
const description = ref('')
const price = ref(0)
const showAlert = ref(false)

const schema = object({
  image: mixed().required().label('Image'),
  title: string().required().label('Product Name'),
  price: number().required().label('Price'),
  category: string().required().label('Category'),
  description: string().required().label('Description'),
})
const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit((values) => {
  useProductStore().addProduct(values)
  showAlert.value = true
  resetForm()
})

setTimeout(() => {
  showAlert.value = false
}, 5000)

definePageMeta({
  breadcrumbs: [
    {
      title: 'Products',
      to: '/products',
    },
    {
      title: 'Add Item',
      to: '/products/create',
    },
  ] as VBreadcrumbItemProps[],
})
</script>

<template>
  <ContentHeader title="Add Product" :button="true" to="/products">
    Add Product
  </ContentHeader>
  <VAlert v-if="showAlert" color="success" class="mb-6">
    Product Added Successfully
  </VAlert>
  <ClientOnly placeholder="Loading...">
    <VCard>
      <form @submit="onSubmit">
        <VFileUpload
          v-model="image"
          color="morning-glory"
          rounded
          label="Image"
          theme="image"
          name="image"
        />
        <div class="grid grid-cols-2 gap-x-6 my-3">
          <VInput
            v-model="title"
            color="morning-glory"
            name="title"
            label="Product Name"
            placeholder="Product name"
          />
          <VInput v-model="price" color="morning-glory" name="price" label="Price" />
        </div>
        <VInput
          v-model="category"
          color="morning-glory"
          name="category"
          label="Category"
          placeholder="Category"
        />
        <VEditor
          v-model="description"
          color="morning-glory"
          name="description"
          label="Description"
          placeholder="Input your content"
          class="my-3"
        />
        <div class="w-1/3">
          <VBtn type="submit" color="morning-glory" class="my-3">
            Submit
          </VBtn>
          <VBtn type="button" text @click="resetForm">
            Reset
          </VBtn>
        </div>
      </form>
    </VCard>
  </ClientOnly>
</template>
