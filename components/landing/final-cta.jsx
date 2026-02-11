"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function FinalCTA() {
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
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: "3s" }} />

      <div
        ref={ref}
        className={cn(
          "relative z-10 max-w-4xl mx-auto text-center opacity-0",
          isVisible && "animate-fade-up"
        )}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Next Is <span className="text-teal-200">YOU</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
          {"Don't wait for the perfect moment. Start building your coaching empire today with all the tools you need \u2014 in one place, for one price, forever."}
        </p>
        <div className="mt-10">
          <a
            href="#reserve"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-teal-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Book A Free One-On-One Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <p className="mt-4 text-teal-200 text-sm">
          No credit card required. No obligations. Just a conversation.
        </p>
      </div>
    </section>
  )
}
