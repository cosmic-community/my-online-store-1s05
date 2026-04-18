import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-sm border-b border-stone/10">
      <div className="container-luxe">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="text-2xl md:text-3xl font-serif tracking-wide">
            LUXE <span className="text-champagne">MAISON</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-xs uppercase tracking-widest-xl hover:text-champagne transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-xs uppercase tracking-widest-xl hover:text-champagne transition-colors">
              Collection
            </Link>
            <Link href="/categories" className="text-xs uppercase tracking-widest-xl hover:text-champagne transition-colors">
              Categories
            </Link>
            <Link href="/reviews" className="text-xs uppercase tracking-widest-xl hover:text-champagne transition-colors">
              Reviews
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/products" className="text-xs uppercase tracking-widest-xl hover:text-champagne transition-colors md:hidden">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}