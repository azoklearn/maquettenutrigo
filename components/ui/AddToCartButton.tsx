'use client'

import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import Button from './Button'
import { useCart } from '@/context/CartContext'

interface AddToCartButtonProps {
  product: {
    id: string
    variantId: string
    name: string
    price: number
    image: string
    handle: string
  }
  quantity?: number
  disabled?: boolean
  fullWidth?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function AddToCartButton({
  product,
  quantity = 1,
  disabled = false,
  fullWidth = false,
  size = 'md',
}: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart({
      variantId: product.variantId,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      handle: product.handle,
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Button
      variant={added ? 'secondary' : 'primary'}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || added}
      onClick={handleAddToCart}
    >
      {added ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Ajouté au panier !
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Ajouter au panier
        </>
      )}
    </Button>
  )
}
