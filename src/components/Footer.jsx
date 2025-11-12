export default function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} NovaSaaS. All rights reserved.</p>
        <nav className="text-sm text-gray-700 flex items-center gap-4">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>
      </div>
    </footer>
  )
}
