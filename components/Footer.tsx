import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory mt-20">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif mb-4">
              LUXE <span className="text-champagne">MAISON</span>
            </h3>
            <p className="text-stone max-w-md leading-relaxed">
              Curating exceptional luxury pieces for those who appreciate timeless craftsmanship and refined elegance.
            </p>
          </div>
          <div>
            <h4 className="label-luxe text-ivory mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="text-stone hover:text-champagne transition-colors">Collection</Link></li>
              <li><Link href="/categories" className="text-stone hover:text-champagne transition-colors">Categories</Link></li>
              <li><Link href="/reviews" className="text-stone hover:text-champagne transition-colors">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="label-luxe text-ivory mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-stone">
              <li>concierge@luxemaison.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon–Sat, 9am–6pm EST</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone">© {new Date().getFullYear()} Luxe Maison. All rights reserved.</p>
          <p className="text-xs text-stone uppercase tracking-widest-xl">Crafted with excellence</p>
        </div>
      </div>
    </footer>
  )
}