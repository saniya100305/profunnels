"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function FeatureCard({ icon: Icon, title, description, price, delay = 0 }) {
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
        "group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border opacity-0",
        isVisible && "animate-fade-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
          <Icon className="w-6 h-6 text-teal-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{description}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-sm text-muted-foreground line-through">{price}</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
              FREE
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
