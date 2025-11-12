import { motion } from 'framer-motion'

export default function Showcase() {
  const items = [
    { title: 'Analytics Overview', desc: 'Clean, legible charts with actionable insights.' },
    { title: 'Team Management', desc: 'Invite, roles, and permissions made simple.' },
    { title: 'Billing & Subscriptions', desc: 'Stripe-ready flows to start charging from day one.' },
  ]

  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Production UI examples</h2>
          <p className="mt-3 text-gray-600">Swap in your brand and ship. Components are accessible, responsive, and themeable.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-100 via-white to-slate-100 grid place-items-center">
                <span className="text-sm font-medium text-slate-600">{item.title}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
