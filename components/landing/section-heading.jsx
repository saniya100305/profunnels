"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({ title, subtitle, className, light }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "text-center mb-12 opacity-0",
        isVisible && "animate-fade-up",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl mx-auto leading-relaxed",
            light ? "text-teal-100" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
