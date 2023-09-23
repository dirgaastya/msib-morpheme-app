import type { VDataTableHeader } from '@morpheme/table'

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
export interface IAddProduct {
  title: string
  price: number
  category: string
  description: string
}

export const headers = ref<VDataTableHeader[]>([
  {
    value: 'thumbnail',
    text: 'Image',
  },
  {
    value: 'title',
    text: 'Name',
    tdClass: 'capitalize',
  },
  {
    value: 'price',
    text: 'Price',
  },
  {
    value: 'category',
    text: 'Category',
    tdClass: 'capitalize',
  },
  {
    value: 'id',
    text: 'Action',
    align: 'center',
  },
])
