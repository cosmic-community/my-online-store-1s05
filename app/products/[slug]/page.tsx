// app/products/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, getReviewsByProduct, getMetafieldValue } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'
import StarRating from '@/components/StarRating'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getReviewsByProduct(product.id)

  const productName = getMetafieldValue(product.metadata?.product_name) || product.title
  const sku = getMetafieldValue(product.metadata?.sku)
  const price = product.metadata?.price
  const description = getMetafieldValue(product.metadata?.description)
  const shortDesc = getMetafieldValue(product.metadata?.short_description)
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const stockQuantity = product.metadata?.stock_quantity
  const category = product.metadata?.category
  const featuredImage = product.metadata?.featured_image
  const gallery = product.metadata?.gallery || []

  const allImages = featuredImage ? [featuredImage, ...gallery] : gallery

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => {
        const rating = typeof r.metadata?.rating === 'number' 
          ? r.metadata.rating 
          : parseInt(getMetafieldValue(r.metadata?.rating)) || 0
        return sum + rating
      }, 0) / reviews.length
    : 0

  return (
    <div className="py-12 md:py-20">
      <div className="container-luxe">
        <nav className="mb-8 text-xs uppercase tracking-widest-xl text-stone">
          <Link href="/" className="hover:text-champagne">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-champagne">Collection</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{productName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-4">
            {allImages.length > 0 ? (
              <>
                <div className="aspect-[3/4] bg-cream overflow-hidden">
                  <img
                    src={`${allImages[0]?.imgix_url}?w=1200&h=1600&fit=crop&auto=format,compress`}
                    alt={productName}
                    className="w-full h-full object-cover"
                  />
                </div>
                {allImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {allImages.slice(1, 5).map((img, idx) => (
                      <div key={idx} className="aspect-square bg-cream overflow-hidden">
                        <img
                          src={`${img.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                          alt={`${productName} ${idx + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="aspect-[3/4] bg-cream flex items-center justify-center text-stone">
                No Image Available
              </div>
            )}
          </div>

          <div className="lg:pt-8">
            {category && (
              <Link href={`/categories/${category.slug}`} className="label-luxe hover:text-champagne">
                {getMetafieldValue(category.metadata?.name) || category.title}
              </Link>
            )}
            <h1 className="text-4xl md:text-5xl font-serif mt-4 mb-6">{productName}</h1>

            {reviews.length > 0 && (
              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={Math.round(avgRating)} />
                <span className="text-sm text-stone">
                  {avgRating.toFixed(1)} ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
                </span>
              </div>
            )}

            {typeof price === 'number' && (
              <p className="text-3xl font-serif text-charcoal mb-8">
                ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            )}

            {shortDesc && (
              <p className="text-lg text-stone leading-relaxed mb-8">{shortDesc}</p>
            )}

            <div className="border-t border-b border-stone/10 py-6 mb-8 space-y-3">
              {sku && (
                <div className="flex justify-between text-sm">
                  <span className="label-luxe">SKU</span>
                  <span>{sku}</span>
                </div>
              )}
              {inventoryStatus && (
                <div className="flex justify-between text-sm">
                  <span className="label-luxe">Availability</span>
                  <span className={inventoryStatus === 'In Stock' ? 'text-green-700' : inventoryStatus === 'Out of Stock' ? 'text-red-700' : 'text-champagne'}>
                    {inventoryStatus}
                  </span>
                </div>
              )}
              {typeof stockQuantity === 'number' && stockQuantity > 0 && inventoryStatus !== 'Out of Stock' && (
                <div className="flex justify-between text-sm">
                  <span className="label-luxe">In Stock</span>
                  <span>{stockQuantity} units</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                disabled={inventoryStatus === 'Out of Stock'}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {inventoryStatus === 'Out of Stock' ? 'Sold Out' : inventoryStatus === 'Pre-Order' ? 'Pre-Order' : 'Add to Cart'}
              </button>
              <button className="btn-outline">Contact Concierge</button>
            </div>

            {description && (
              <div>
                <h3 className="text-xl font-serif mb-4">Details</h3>
                <div className="text-stone leading-relaxed whitespace-pre-line">
                  {description}
                </div>
              </div>
            )}
          </div>
        </div>

        {reviews.length > 0 && (
          <section className="mt-20 md:mt-28 pt-16 border-t border-stone/10">
            <div className="text-center mb-12">
              <p className="label-luxe mb-4">Client Reviews</p>
              <h2 className="text-3xl md:text-4xl font-serif">What Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review} showProduct={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}