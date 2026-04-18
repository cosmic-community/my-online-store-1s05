import CategoryCard from '@/components/CategoryCard'
import { getCategories } from '@/lib/cosmic'

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="text-center mb-16">
          <p className="label-luxe mb-4">Browse</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Categories</h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-stone max-w-2xl mx-auto leading-relaxed">
            Explore our curated categories, each featuring exceptional pieces selected for their distinct character and quality.
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone">No categories available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}