'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { shopifyClient } from '@/lib/shopify'

interface CartItem {
  id: string
  variantId: string
  productId: string
  name: string
  price: number
  image: string
  quantity: number
  handle: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'id'>) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
  cartTotal: number
  checkoutUrl: string | null
  isLoading: boolean
  checkout: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('nutrigo-cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error('Error loading cart:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('nutrigo-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(i => i.variantId === item.variantId)
      
      if (existingItem) {
        return currentCart.map(i =>
          i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      
      return [...currentCart, { ...item, id: Date.now().toString() }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart(currentCart => currentCart.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId)
      return
    }
    
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
    setCheckoutUrl(null)
  }

  const checkout = async () => {
    setIsLoading(true)
    try {
      const lineItems = cart.map(item => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }))

      const checkout = await shopifyClient.checkout.create()
      const checkoutWithItems = await shopifyClient.checkout.addLineItems(
        checkout.id,
        lineItems
      )

      setCheckoutUrl(checkoutWithItems.webUrl)
      
      if (checkoutWithItems.webUrl) {
        window.location.href = checkoutWithItems.webUrl
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Erreur lors de la création du panier. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        checkoutUrl,
        isLoading,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
