"use client"

import { Star } from "lucide-react"

export function TestimonialCard({ name, testimonial }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border flex flex-col gap-4 min-w-[300px] max-w-[360px] flex-shrink-0">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        {`"${testimonial}"`}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm">
          {name.charAt(0)}
        </div>
        <span className="font-semibold text-card-foreground text-sm">{name}</span>
      </div>
    </div>
  )
}
