'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type FlagshipCardProps = {
  children: ReactNode
  className?: string
}

export function FlagshipCard({ children, className }: FlagshipCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group h-full"
    >
      <Card
        className={cn(
          'h-full border-t-[3px] border-t-[#14532D] transition-shadow duration-200 group-hover:shadow-[0_12px_32px_-4px_rgba(24,24,27,0.10)]',
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}