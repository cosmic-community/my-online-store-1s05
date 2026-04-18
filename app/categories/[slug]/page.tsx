// app/categories/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { getCategoryBySlug, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.category_image

  return (
    <div>
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] bg-cream overflow-hidden flex items-center">
        {image && (
          <img
            src={`${image.imgix_url}?w=2000&h=1200&fit=crop&auto=format,compress`}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="container-luxe relative z-10 text-ivory">
          <nav className="mb-6 text-xs uppercase tracking-widest-xl">
            <Link href="/" className="hover:text-champagne">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-champagne">Categories</Link>
          </nav>
          <p className="label-luxe text-champagne mb-4">Collection</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{name}</h1>
          {description && (
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-ivory/90">{description}</p>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-serif">
              {products.length} {products.length === 1 ? 'Piece' : 'Pieces'}
            </h2>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone">No products in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}