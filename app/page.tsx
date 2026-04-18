import Link from 'next/link'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'
import { getFeaturedProducts, getProducts, getCategories, getReviews } from '@/lib/cosmic'

export default async function HomePage() {
  const [featuredProducts, allProducts, categories, reviews] = await Promise.all([
    getFeaturedProducts(),
    getProducts(),
    getCategories(),
    getReviews(),
  ])

  const displayProducts = featuredProducts.length > 0 ? featuredProducts.slice(0, 4) : allProducts.slice(0, 4)
  const displayCategories = categories.slice(0, 3)
  const displayReviews = reviews.slice(0, 2)

  return (
    <>
      <Hero />

      {displayCategories.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container-luxe">
            <div className="text-center mb-16">
              <p className="label-luxe mb-4">Curated Collections</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Shop by Category</h2>
              <div className="divider-gold mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayCategories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {displayProducts.length > 0 && (
        <section className="py-20 md:py-28 bg-cream">
          <div className="container-luxe">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="label-luxe mb-4">Featured</p>
                <h2 className="text-4xl md:text-5xl font-serif">Signature Pieces</h2>
              </div>
              <Link href="/products" className="text-xs uppercase tracking-widest-xl text-champagne hover:text-champagne-dark mt-6 md:mt-0">
                View All Products →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {displayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="divider-gold mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-3">Master Craftsmanship</h3>
              <p className="text-stone leading-relaxed">Every piece is meticulously crafted by world-renowned artisans using time-honored techniques.</p>
            </div>
            <div>
              <div className="divider-gold mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-3">Exclusive Materials</h3>
              <p className="text-stone leading-relaxed">Sourced from the finest suppliers worldwide, our materials embody unparalleled quality.</p>
            </div>
            <div>
              <div className="divider-gold mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-3">Concierge Service</h3>
              <p className="text-stone leading-relaxed">Personalized attention and white-glove service from selection to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {displayReviews.length > 0 && (
        <section className="py-20 md:py-28 bg-cream">
          <div className="container-luxe">
            <div className="text-center mb-16">
              <p className="label-luxe mb-4">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Client Reflections</h2>
              <div className="divider-gold mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {displayReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/reviews" className="btn-outline">
                Read All Reviews
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}