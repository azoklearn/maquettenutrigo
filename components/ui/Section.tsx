import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  centered?: boolean
  background?: 'white' | 'gray' | 'primary'
  size?: 'default' | 'narrow' | 'wide'
}

export default function Section({
  children,
  className,
  title,
  subtitle,
  centered = false,
  background = 'white',
  size = 'default',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-50',
  }

  return (
    <section className={cn(
      'py-12 lg:py-20',
      backgrounds[background],
      className
    )}>
      <Container size={size}>
        {(title || subtitle) && (
          <div className={cn(
            'mb-8 lg:mb-12',
            centered && 'text-center'
          )}>
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-neutral-600 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
