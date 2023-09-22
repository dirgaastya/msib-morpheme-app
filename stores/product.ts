import { defineStore } from 'pinia'
import axios from 'axios'
import type { IProduct } from '../types/product'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as IProduct[],
    loading: true,
  }),
  actions: {
    async getProducts(): Promise<void> {
      try {
        await axios.get('https://dummyjson.com/products')
          .then(res => this.products = res.data.products)
          .finally(() => this.loading = false)
      }
      catch (error) {
      }
    },
    addProduct(product: any) {
      this.products.push({
        id: this.products.length + 1,
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: 12,
        rating: 3,
        stock: 1,
        brand: 'brand',
        category: product.category,
        thumbnail: 'https://source.unsplash.com/random/300×300/?product',
        images: [],
      })
    },
    async removeProduct(id: number): Promise<void> {
      try {
        this.products = this.products.filter(product => product.id !== id)
      }
      catch (error) {

      }
    },
  },
})
