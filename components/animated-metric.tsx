'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

type AnimatedMetricProps = {
  stat: string
  className?: string
}

function parseStat(stat: string) {
  const match = stat.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
  if (!match) return null
  return { prefix: match[1], value: parseFloat(match[2]), suffix: match[3] }
}

export function AnimatedMetric({ stat, className }: AnimatedMetricProps) {
  const parsed = parseStat(stat)
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : stat)

  useEffect(() => {
    if (!parsed) {
      setDisplay(stat)
      return
    }
    const controls = animate(motionValue, parsed.value, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        const rounded = parsed.value % 1 === 0 ? Math.round(latest) : latest.toFixed(1)
        setDisplay(`${parsed.prefix}${rounded}${parsed.suffix}`)
      },
    })
    return () => controls.stop()
  }, [stat]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {display}
    </motion.span>
  )
}