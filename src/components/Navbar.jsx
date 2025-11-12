import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-white/60 supports-[backdrop-filter]:bg-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">NovaSaaS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#cta" className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black transition-colors">Get started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <div className="flex gap-3">
              <a href="#pricing" className="flex-1 rounded-md border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Pricing</a>
              <a href="#cta" className="flex-1 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
