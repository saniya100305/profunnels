export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-semibold">MyProFunnels</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer navigation">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cancellation & Refund</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: Results may vary. The testimonials and examples on this page are not intended to represent or guarantee that anyone will achieve the same or similar results. Each business is unique and results depend on individual effort, market conditions, and other factors.
          </p>
          <p className="mt-4 text-sm">
            {"Copyright \u00A9 2024 MyProFunnels. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
