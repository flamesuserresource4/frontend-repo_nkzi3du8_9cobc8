import { Cpu, ShieldCheck, Zap, Globe2, Layers, LineChart } from 'lucide-react'

const items = [
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Vite + React with HMR for instant feedback and a snappy UX.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    desc: 'Best practices and modern patterns to keep data safe.'
  },
  {
    icon: Cpu,
    title: 'AI-Ready',
    desc: 'Integrate AI features effortlessly with a clean API surface.'
  },
  {
    icon: Globe2,
    title: 'Scalable Backend',
    desc: 'FastAPI + MongoDB out of the box for real persistence.'
  },
  {
    icon: Layers,
    title: 'Composable UI',
    desc: 'Tailwind utilities and headless primitives for speed.'
  },
  {
    icon: LineChart,
    title: 'Analytics Friendly',
    desc: 'Hook in product analytics and ship with confidence.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need to launch</h2>
          <p className="mt-3 text-gray-600">A modern stack, polished UI, and built-in patterns so you can focus on your product.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
