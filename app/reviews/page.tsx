import ReviewCard from '@/components/ReviewCard'
import { getReviews, getMetafieldValue } from '@/lib/cosmic'

export default async function ReviewsPage() {
  const reviews = await getReviews()

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => {
        const rating = typeof r.metadata?.rating === 'number' 
          ? r.metadata.rating 
          : parseInt(getMetafieldValue(r.metadata?.rating)) || 0
        return sum + rating
      }, 0) / reviews.length
    : 0

  const verifiedCount = reviews.filter(r => r.metadata?.verified_purchase).length

  return (
    <div className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="text-center mb-16">
          <p className="label-luxe mb-4">Client Voices</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Reviews</h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-stone max-w-2xl mx-auto leading-relaxed">
            Reflections from our valued clientele on their experiences with Luxe Maison.
          </p>
        </div>

        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 text-center">
            <div className="bg-cream p-8">
              <div className="text-4xl font-serif text-champagne mb-2">{avgRating.toFixed(1)}</div>
              <div className="label-luxe">Average Rating</div>
            </div>
            <div className="bg-cream p-8">
              <div className="text-4xl font-serif text-champagne mb-2">{reviews.length}</div>
              <div className="label-luxe">Total Reviews</div>
            </div>
            <div className="bg-cream p-8">
              <div className="text-4xl font-serif text-champagne mb-2">{verifiedCount}</div>
              <div className="label-luxe">Verified Purchases</div>
            </div>
          </div>
        )}

        {reviews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone">No reviews available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}