import { Product } from './types'
import { ShopifyProduct } from './shopify'

export function shopifyProductToProduct(shopifyProduct: any): Product {
  const price = parseFloat(shopifyProduct.priceRange.minVariantPrice.amount)
  const originalPrice = shopifyProduct.compareAtPriceRange?.minVariantPrice?.amount
    ? parseFloat(shopifyProduct.compareAtPriceRange.minVariantPrice.amount)
    : undefined

  const discount = originalPrice && originalPrice > price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : undefined

  const images = shopifyProduct.images.edges.map((edge: any) => edge.node.url)

  const inStock = shopifyProduct.availableForSale && 
    shopifyProduct.variants.edges.some((edge: any) => edge.node.availableForSale)

  return {
    id: shopifyProduct.id,
    name: shopifyProduct.title,
    slug: shopifyProduct.handle,
    description: shopifyProduct.description,
    shortDescription: shopifyProduct.description.substring(0, 120) + '...',
    price,
    originalPrice,
    discount,
    images,
    category: shopifyProduct.productType || 'Non catégorisé',
    brand: shopifyProduct.vendor,
    inStock,
    tags: shopifyProduct.tags,
    featured: shopifyProduct.tags.includes('featured'),
    bestseller: shopifyProduct.tags.includes('bestseller'),
  }
}

export function shopifyCollectionToCategory(collection: any) {
  return {
    id: collection.id,
    name: collection.title,
    slug: collection.handle,
    description: collection.description,
    image: collection.image?.url,
    productCount: collection.products?.edges?.length || 0,
  }
}
