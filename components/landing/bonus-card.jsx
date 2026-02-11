"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function BonusCard({ icon: Icon, title, price, delay = 0 }) {
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
        "group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] opacity-0",
        isVisible && "animate-fade-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
          <Icon className="w-5 h-5 text-teal-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-sm">{title}</h3>
          <span className="inline-flex items-center mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300">
            Worth {price}
          </span>
        </div>
      </div>
    </div>
  )
}
