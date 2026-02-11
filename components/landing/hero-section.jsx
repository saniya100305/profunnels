"use client"

import { ArrowRight, BarChart3, Users, Zap, MessageSquare, TrendingUp, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800">
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-100 text-sm font-medium mb-6">
              Trusted by 500+ Coaches & Creators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              Attention Coaches & Course Creators
            </h1>
            <p className="mt-6 text-lg md:text-xl text-teal-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              An All-in-One Digital Marketing & Automation Tool with Chatbot & IVR for Your Coaching Business
            </p>
            <p className="mt-4 text-2xl md:text-3xl font-bold text-white">
              Launch Your Courses With Ease!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <a
                href="#reserve"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              >
                Book A Free One-on-One Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -top-3 -right-3 px-2.5 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  {"Worth \u20B91999 \u2013 FREE"}
                </span>
              </a>
            </div>
            <p className="mt-4 text-teal-200 text-sm">
              Launch your course within 30 minutes
            </p>
          </div>

          {/* Dashboard Illustration */}
          <div className="flex-1 max-w-lg w-full animate-float">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-white/60 text-xs font-medium">MyProFunnels Dashboard</span>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <DashboardStat icon={Users} label="Students" value="2,847" />
                <DashboardStat icon={TrendingUp} label="Revenue" value="$42.5K" />
                <DashboardStat icon={Zap} label="Automations" value="156" />
              </div>
              {/* Chart placeholder */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/80 text-xs font-medium">Course Enrollments</span>
                  <span className="text-amber-400 text-xs font-semibold">+28.5%</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 55, 35, 60, 75, 50, 85, 70, 90, 65, 95, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-teal-400 to-emerald-400 rounded-sm opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* Activity */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/5 rounded-lg p-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-teal-300" />
                  <span className="text-white/70 text-xs">12 new messages</span>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg p-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span className="text-white/70 text-xs">5 calls today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardStat({ icon: Icon, label, value }) {
  return (
    <div className="bg-white/5 rounded-lg p-3 text-center">
      <Icon className="w-4 h-4 text-teal-300 mx-auto mb-1" />
      <p className="text-white font-bold text-sm">{value}</p>
      <p className="text-white/50 text-xs">{label}</p>
    </div>
  )
}
