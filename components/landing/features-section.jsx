"use client"

import {
  Layout,
  Globe,
  Mail,
  MessageCircle,
  Workflow,
  CalendarDays,
  ClipboardList,
  Users,
  BarChart3,
  GraduationCap,
  Server,
  CreditCard,
  Video,
  UserPlus,
  Bell,
  Headphones,
  Heart,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { FeatureCard } from "./feature-card"

const features = [
  { icon: Layout, title: "Unlimited Landing Pages", description: "Create high-converting landing pages with our drag-and-drop builder", price: "\u20B94,999/mo" },
  { icon: Globe, title: "Unlimited Websites", description: "Build professional websites for your coaching brand", price: "\u20B95,999/mo" },
  { icon: Mail, title: "Unlimited Emails", description: "Send unlimited email campaigns to your audience", price: "\u20B93,999/mo" },
  { icon: MessageCircle, title: "Unlimited WhatsApp Messages", description: "Reach your students instantly via WhatsApp automation", price: "\u20B96,999/mo" },
  { icon: Workflow, title: "Unlimited Automations", description: "Automate your entire marketing and sales funnel", price: "\u20B97,999/mo" },
  { icon: CalendarDays, title: "Unlimited Calendar Setup", description: "Schedule calls and sessions with built-in calendar", price: "\u20B92,999/mo" },
  { icon: ClipboardList, title: "Unlimited Contact Forms", description: "Capture leads with customizable forms", price: "\u20B91,999/mo" },
  { icon: Users, title: "Unlimited Contacts Stored", description: "Store and manage all your contacts in one CRM", price: "\u20B94,999/mo" },
  { icon: BarChart3, title: "Unlimited Surveys", description: "Collect feedback and insights from your audience", price: "\u20B92,499/mo" },
  { icon: GraduationCap, title: "Unlimited LMS", description: "Host and deliver courses with our learning management system", price: "\u20B98,999/mo" },
  { icon: Server, title: "Unlimited Hosting", description: "Fast, reliable hosting for all your pages and content", price: "\u20B93,499/mo" },
  { icon: CreditCard, title: "Unlimited Payment Pages", description: "Accept payments seamlessly with integrated checkout", price: "\u20B94,999/mo" },
  { icon: Video, title: "Unlimited Zoom Webinars", description: "Run live webinars and virtual events effortlessly", price: "\u20B95,999/mo" },
  { icon: UserPlus, title: "Unlimited Staff Add-Ons", description: "Add unlimited team members at no extra cost", price: "\u20B92,999/mo" },
  { icon: Bell, title: "Unlimited Mobile & Web Push", description: "Send push notifications to keep your audience engaged", price: "\u20B93,999/mo" },
  { icon: Headphones, title: "Unlimited Live Support", description: "Get round-the-clock support whenever you need it", price: "\u20B94,999/mo" },
  { icon: Heart, title: "Unlimited Happiness", description: "Because your success and satisfaction matter most to us", price: "Priceless" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Everything Unlimited \u2014 No Monthly Fees"
          subtitle="Get access to every tool you need to grow your coaching business, without any recurring costs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              price={feature.price}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
