const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

async function shopifyFetch<T>({ query, variables = {} }: { query: string; variables?: any }): Promise<T> {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    })

    if (!result.ok) {
      throw new Error(`Shopify API error: ${result.status}`)
    }

    const json = await result.json()
    
    if (json.errors) {
      throw new Error(json.errors[0]?.message || 'Shopify GraphQL error')
    }

    return json.data as T
  } catch (error) {
    console.error('Shopify fetch error:', error)
    throw error
  }
}

const productFragment = `
  fragment ProductFragment on Product {
    id
    title
    handle
    description
    descriptionHtml
    availableForSale
    tags
    productType
    vendor
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
`

export async function getAllProducts(limit = 12) {
  const query = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            ...ProductFragment
          }
        }
      }
    }
    ${productFragment}
  `

  const data = await shopifyFetch<any>({
    query,
    variables: { first: limit },
  })

  return data.products.edges.map((edge: any) => edge.node)
}

export async function getProductByHandle(handle: string) {
  const query = `
    query GetProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        ...ProductFragment
      }
    }
    ${productFragment}
  `

  const data = await shopifyFetch<any>({
    query,
    variables: { handle },
  })

  return data.productByHandle
}

export async function getProductsByCollection(collectionHandle: string, limit = 20) {
  const query = `
    query GetCollectionProducts($handle: String!, $first: Int!) {
      collectionByHandle(handle: $handle) {
        title
        description
        products(first: $first) {
          edges {
            node {
              ...ProductFragment
            }
          }
        }
      }
    }
    ${productFragment}
  `

  const data = await shopifyFetch<any>({
    query,
    variables: { handle: collectionHandle, first: limit },
  })

  return data.collectionByHandle
}

export async function getAllCollections() {
  const query = `
    query GetCollections {
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
            products(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  `

  const data = await shopifyFetch<any>({ query })

  return data.collections.edges.map((edge: any) => ({
    ...edge.node,
    productCount: edge.node.products.edges.length,
  }))
}

export async function createCheckout(lineItems: Array<{ variantId: string; quantity: number }>) {
  const query = `
    mutation CreateCheckout($lineItems: [CheckoutLineItemInput!]!) {
      checkoutCreate(input: { lineItems: $lineItems }) {
        checkout {
          id
          webUrl
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          message
          field
        }
      }
    }
  `

  const data = await shopifyFetch<any>({
    query,
    variables: { lineItems },
  })

  return data.checkoutCreate.checkout
}

export async function updateCheckout(checkoutId: string, lineItems: Array<{ variantId: string; quantity: number }>) {
  const query = `
    mutation UpdateCheckout($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
      checkoutLineItemsReplace(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          webUrl
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }
  `

  const data = await shopifyFetch<any>({
    query,
    variables: { checkoutId, lineItems },
  })

  return data.checkoutLineItemsReplace.checkout
}
