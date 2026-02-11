"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    name: "Shbhangi Bhujbal",
    testimonial:
      "MyProFunnels transformed my coaching business. I launched my first course in just 25 minutes and started getting enrollments the same day!",
  },
  {
    name: "Shailendra Jain",
    testimonial:
      "I was paying for 6 different tools before switching. Now everything is in one place and my costs dropped by 80%. Absolutely game-changing.",
  },
  {
    name: "LN & Team",
    testimonial:
      "The automation features alone saved us 20+ hours every week. Our team can now focus on creating content instead of managing tools.",
  },
  {
    name: "Gautam Sonwane",
    testimonial:
      "The WhatsApp integration is phenomenal. My engagement rates went through the roof and I doubled my course sales in the first month.",
  },
  {
    name: "Shubham Saraf",
    testimonial:
      "As a new course creator, I was overwhelmed. MyProFunnels made everything simple. The guided setup call was incredibly helpful.",
  },
  {
    name: "Manju Yadav",
    testimonial:
      "The LMS is so intuitive that my students love it. I get compliments about how professional my courses look. Highly recommend!",
  },
  {
    name: "Ankit Goel",
    testimonial:
      "Best decision I made for my business. The payment integration is seamless and the landing page builder is surprisingly powerful.",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef(null)
  const sectionRef = useRef(null)
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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    let animationId
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0
      }
      container.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      scrollPosition = container.scrollLeft
      animationId = requestAnimationFrame(scroll)
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-16">
      <div
        className={cn(
          "max-w-7xl mx-auto opacity-0",
          isVisible && "animate-fade-up"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from coaches and course creators who transformed their business with MyProFunnels
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
