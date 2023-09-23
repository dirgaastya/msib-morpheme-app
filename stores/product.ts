import { defineStore } from 'pinia'
import axios from 'axios'
import type { IProduct } from '../types/product'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as IProduct[],
    product: {} as IProduct,
    filteredProducts: [] as IProduct[],
    loading: true,
  }),
  getters: {
    productDetail: (state) => {
      return (productId: number) => {
        return state.products.find(product => product.id === productId)
      }
    },
  },
  actions: {
    async getProducts(): Promise<void> {
      try {
        await axios.get('https://dummyjson.com/products')
          .then(res => this.products = res.data.products)
          .finally(() => this.loading = false)
        this.filteredProducts = this.products
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
      this.filteredProducts = this.products
    },
    getSingleProduct(id: number): void {
      this.loading = true
      this.product = this.products.find(product => product.id === id) || ({} as IProduct)
      this.loading = false
    },
    editProduct(id: number, updatedProduct: any): void {
      const index = this.products.findIndex(product => product.id === id)
      if (index !== -1) {
        this.products[index] = {
          ...this.products[index],
          ...updatedProduct,
        }
      }
      this.filteredProducts = this.products
    },
    async removeProduct(id: number): Promise<void> {
      try {
        this.products = this.products.filter(product => product.id !== id)
        this.filteredProducts = this.products
      }
      catch (error) {
      }
    },
    searchProducts(query: string): void {
      this.loading = true
      const searchResults = this.products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      )
      this.filteredProducts = searchResults
      this.loading = false
    },
  },
})
