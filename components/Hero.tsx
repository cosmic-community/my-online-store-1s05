import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="container-luxe py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="label-luxe mb-6 animate-fade-in">Maison Established 2024</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 animate-slide-up">
            Timeless<br />
            <span className="italic text-champagne">Elegance</span><br />
            Redefined
          </h1>
          <p className="text-lg md:text-xl text-stone max-w-xl mb-12 leading-relaxed">
            Discover an exquisite collection of luxury pieces, curated with an unwavering commitment to craftsmanship and refined beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-primary">
              Explore Collection
            </Link>
            <Link href="/categories" className="btn-outline">
              View Categories
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-20">
        <div className="absolute inset-0 bg-gradient-to-l from-champagne/30 to-transparent" />
      </div>
    </section>
  )
}