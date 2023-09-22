<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'
import { mixed, number, object, string } from 'yup'
import { useForm } from 'vee-validate'
import VEditor from '@morpheme/editor'
import { useProductStore } from '~/stores/product'

const schema = object({
  image: mixed().required().label('Image'),
  title: string().required().label('Product Name'),
  price: number().required().label('Price'),
  category: string().required().label('Category'),
  description: string().required().label('Description'),
})
const { handleSubmit, resetForm, values } = useForm({
  validationSchema: schema,
  initialErrors: {
    description: 'Content is required',
  },
})

const onSubmit = handleSubmit((values) => {
  useProductStore().addProduct(values)
  navigateTo('/products')
})
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
const image = ref('')
const title = ref('')
const category = ref('')
const description = ref('')
const price = ref(0)
</script>

<template>
  <ContentHeader title="Add Product">
    Add Product
  </ContentHeader>
  <ClientOnly placeholder="Loading...">
    <VCard>
      <form @submit="onSubmit">
        <VFileUpload
          v-model="image"
          rounded
          label="Image"
          theme="image"
          name="image"
        />
        <div class="grid grid-cols-2 gap-x-6 my-3">
          <VInput v-model="title" name="title" label="Product Name" placeholder="Product name" />
          <VInput v-model="price" name="price" label="Price" />
        </div>
        <VInput v-model="category" name="category" label="Category" placeholder="Category" />
        <VEditor
          v-model="description"
          name="description"
          label="Description"
          placeholder="Input your content"
        />
        <div class="w-1/3">
          <VBtn type="submit" color="primary" class="my-3">
            Submit
          </VBtn>
          <VBtn type="button" text @click="resetForm">
            Reset
          </VBtn>
        </div>
      </form>
    </VCard>
  </ClientOnly>
  <pre>{{ values }}</pre>
</template>
