"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Puzzle, Bot, BookOpen, CreditCard, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const benefits = [
  { icon: Puzzle, text: "All tools unified in one platform \u2014 no more juggling subscriptions" },
  { icon: Bot, text: "Smart automation for marketing, sales, and follow-ups" },
  { icon: BookOpen, text: "Built-in LMS to create and deliver courses seamlessly" },
  { icon: CreditCard, text: "Integrated payment pages to collect fees instantly" },
  { icon: BarChart3, text: "Analytics & reporting to track your business growth" },
  { icon: CheckCircle2, text: "Designed exclusively for coaches and educators" },
]

export function WhyChooseUs() {
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
    <section className="py-20 px-6 md:px-16">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto opacity-0",
          isVisible && "animate-fade-up"
        )}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Illustration side */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Funnels Built", value: "10K+", color: "from-teal-500 to-teal-600" },
                  { label: "Active Users", value: "500+", color: "from-emerald-500 to-emerald-600" },
                  { label: "Courses Launched", value: "2K+", color: "from-teal-600 to-emerald-600" },
                  { label: "Revenue Generated", value: "$5M+", color: "from-emerald-600 to-teal-600" },
                ].map((stat) => (
                  <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 text-center`}>
                    <p className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-teal-100 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              Providing The Simplest Solution For The Most Complex Problems
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Running a coaching business means wearing many hats. MyProFunnels brings together automation, marketing, LMS, and payments into one seamless experience — so you can focus on what you do best: teaching and transforming lives.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center mt-0.5">
                    <benefit.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <p className="text-foreground leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
