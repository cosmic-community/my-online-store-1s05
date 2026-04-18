import Link from 'next/link'
import { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProductCard({ product }: { product: Product }) {
  const featuredImage = product.metadata?.featured_image
  const price = product.metadata?.price
  const productName = getMetafieldValue(product.metadata?.product_name) || product.title
  const shortDesc = getMetafieldValue(product.metadata?.short_description)
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const category = product.metadata?.category

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-5">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=1066&fit=crop&auto=format,compress`}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone">
            No Image
          </div>
        )}
        {inventoryStatus === 'Out of Stock' && (
          <div className="absolute top-4 left-4 bg-charcoal text-ivory px-3 py-1 text-xs uppercase tracking-widest-xl">
            Sold Out
          </div>
        )}
        {inventoryStatus === 'Low Stock' && (
          <div className="absolute top-4 left-4 bg-champagne text-ivory px-3 py-1 text-xs uppercase tracking-widest-xl">
            Limited
          </div>
        )}
        {product.metadata?.featured && (
          <div className="absolute top-4 right-4 bg-ivory/95 text-charcoal px-3 py-1 text-xs uppercase tracking-widest-xl">
            Featured
          </div>
        )}
      </div>
      <div className="space-y-2">
        {category && (
          <p className="label-luxe">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </p>
        )}
        <h3 className="text-lg md:text-xl font-serif group-hover:text-champagne transition-colors">
          {productName}
        </h3>
        {shortDesc && (
          <p className="text-sm text-stone line-clamp-2">{shortDesc}</p>
        )}
        {typeof price === 'number' && (
          <p className="text-base font-medium pt-2">
            ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        )}
      </div>
    </Link>
  )
}