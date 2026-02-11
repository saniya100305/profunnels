"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const tools = [
  "Landing Page Builder",
  "Email Marketing Tool",
  "WhatsApp Automation",
  "CRM & Contact Manager",
  "LMS / Course Platform",
  "Webinar Software",
  "Payment Gateway",
  "Calendar & Scheduling",
]

export function ValueComparison() {
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
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-600/10 via-transparent to-transparent" />
      <div
        ref={ref}
        className={cn(
          "relative z-10 max-w-7xl mx-auto text-center opacity-0",
          isVisible && "animate-fade-up"
        )}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
          {"Replace \u20B989,500/month worth of tools"}
          <br />
          <span className="text-teal-400">with ONE platform</span>
        </h2>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stop paying for 8+ separate subscriptions. MyProFunnels combines everything you need into a single, powerful platform built specifically for coaches and course creators.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {tools.map((tool) => (
            <div key={tool} className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
              <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-slate-200 text-sm text-left">{tool}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#reserve"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 text-lg"
          >
            Book Your Free Call Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
