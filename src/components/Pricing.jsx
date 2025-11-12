import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For prototypes and hobby projects',
    features: ['Unlimited projects', 'Community support', 'Basic components']
  },
  {
    name: 'Pro',
    price: '$19/mo',
    desc: 'For solo builders shipping real products',
    features: ['Everything in Starter', 'Teams & roles', 'Email auth', 'Stripe billing']
  },
  {
    name: 'Scale',
    price: '$79/mo',
    desc: 'For growing startups that need more',
    features: ['Everything in Pro', 'Custom SSO', 'Priority support', 'Advanced analytics']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you’re ready. No hidden fees.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">{tier.price}</p>
              <p className="mt-1 text-sm text-gray-600">{tier.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white font-medium hover:bg-black">Choose {tier.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
