import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Launch your SaaS faster with an AI-ready starter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              Beautiful, responsive, and production-ready UI paired with a scalable backend. Built for founders and indie hackers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-white font-medium hover:bg-black transition-colors">
                Get started free
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-gray-900 font-medium hover:bg-gray-50">
                See pricing
              </a>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {["Auth, billing, and teams", "FastAPI backend with MongoDB", "Tailwind + shadcn/ui", "Deploy in minutes"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl border bg-white/70 backdrop-blur p-4 shadow-xl"
            >
              <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-blue-100 via-white to-indigo-100 grid place-items-center text-center p-6">
                <div>
                  <p className="text-sm text-blue-700 font-semibold tracking-wide uppercase">Live Preview</p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">Dashboard Components</h3>
                  <p className="mt-2 text-gray-600 max-w-md mx-auto">Cards, charts, and forms designed for SaaS dashboards. Customize quickly and ship your product.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
