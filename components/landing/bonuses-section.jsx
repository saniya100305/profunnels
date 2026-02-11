"use client"

import {
  Megaphone,
  MapPin,
  PlayCircle,
  CalendarCheck,
  Smartphone,
  ShieldCheck,
  Search,
  MessagesSquare,
  Target,
  Wrench,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { BonusCard } from "./bonus-card"

const bonuses = [
  { icon: Megaphone, title: "FB / Insta Ads Manager", price: "\u20B914,999" },
  { icon: MapPin, title: "Google My Business Manager", price: "\u20B99,999" },
  { icon: PlayCircle, title: "YouTube / FB / Insta Content Strategy", price: "\u20B912,999" },
  { icon: CalendarCheck, title: "Business Pro Plan Calendar", price: "\u20B97,999" },
  { icon: Smartphone, title: "Android / iOS App Manager", price: "\u20B919,999" },
  { icon: ShieldCheck, title: "SSL Authentication Free", price: "\u20B94,999" },
  { icon: Search, title: "SEO Support", price: "\u20B99,999" },
  { icon: MessagesSquare, title: "Community Channel Facility", price: "\u20B96,999" },
  { icon: Target, title: "Sales Pitch Guidance", price: "\u20B911,999" },
  { icon: Wrench, title: "Done For You Services", price: "\u20B924,999" },
]

export function BonusesSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-600/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          title="Unlimited Bonuses Included"
          subtitle="Get these premium add-ons at absolutely no extra cost when you join MyProFunnels"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={bonus.title}
              icon={bonus.icon}
              title={bonus.title}
              price={bonus.price}
              delay={index * 60}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
