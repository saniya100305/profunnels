"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function ReserveSeat() {
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
    <section id="reserve" className="py-20 px-6 md:px-16 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div
        ref={ref}
        className={cn(
          "max-w-4xl mx-auto text-center opacity-0",
          isVisible && "animate-fade-up"
        )}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Limited Spots Available
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
          Reserve My Seat
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join hundreds of successful course creators who have already transformed their coaching business. Get a guided setup and personalised strategy to launch your first course in under 30 minutes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-teal-600" />
            <span className="text-sm">No Risk, 100% Free</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-teal-600" />
            <span className="text-sm">30-Min Strategy Call</span>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#reserve"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 text-lg"
          >
            Book My Free Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
