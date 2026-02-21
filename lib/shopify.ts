import Client from 'shopify-buy'

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!

if (!domain || !storefrontAccessToken) {
  throw new Error('Missing Shopify environment variables')
}

export const shopifyClient = Client.buildClient({
  domain,
  storefrontAccessToken,
})

export async function getShopifyClient() {
  return shopifyClient
}

export interface ShopifyProduct {
  id: string
  title: string
  handle: string
  description: string
  descriptionHtml: string
  priceRangeV2: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  compareAtPriceRange?: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  images: {
    edges: Array<{
      node: {
        url: string
        altText: string | null
      }
    }>
  }
  variants: {
    edges: Array<{
      node: {
        id: string
        title: string
        priceV2: {
          amount: string
          currencyCode: string
        }
        availableForSale: boolean
        quantityAvailable?: number
      }
    }>
  }
  availableForSale: boolean
  tags: string[]
  productType: string
  vendor: string
}

export interface ShopifyCollection {
  id: string
  title: string
  handle: string
  description: string
  image?: {
    url: string
    altText: string | null
  }
}
