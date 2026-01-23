import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export default function Container({ 
  children, 
  className,
  size = 'default' 
}: ContainerProps) {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-5xl',
    wide: 'max-w-[1400px]',
  }

  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      sizes[size],
      className
    )}>
      {children}
    </div>
  )
}
