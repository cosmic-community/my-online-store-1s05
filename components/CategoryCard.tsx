import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  const image = category.metadata?.category_image
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link href={`/categories/${category.slug}`} className="group block relative overflow-hidden aspect-[4/5] bg-cream">
      {image && (
        <img
          src={`${image.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-ivory">
        <div className="w-12 h-px bg-champagne mb-4" />
        <h3 className="text-2xl md:text-3xl font-serif mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-ivory/80 max-w-sm line-clamp-2">{description}</p>
        )}
        <div className="mt-6 text-xs uppercase tracking-widest-xl text-champagne">
          Explore Collection →
        </div>
      </div>
    </Link>
  )
}