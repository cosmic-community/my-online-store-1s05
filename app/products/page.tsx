import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/lib/cosmic'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="text-center mb-16">
          <p className="label-luxe mb-4">The Collection</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">All Products</h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-stone max-w-2xl mx-auto leading-relaxed">
            Explore our complete collection of luxury pieces, each thoughtfully curated to elevate your lifestyle.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone">No products available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}