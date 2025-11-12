export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border bg-gradient-to-br from-gray-900 to-black p-10 text-white shadow-xl">
          <h2 className="text-3xl font-bold tracking-tight">Build your SaaS this weekend</h2>
          <p className="mt-3 text-gray-300">Get a head start with a modern stack and polished UI. No setup headaches.</p>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input type="email" required placeholder="Your email" className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <button type="submit" className="rounded-md bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-100">Get early access</button>
          </form>
          <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
