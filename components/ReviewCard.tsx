import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function ReviewCard({ review, showProduct = true }: { review: Review; showProduct?: boolean }) {
  const reviewerName = getMetafieldValue(review.metadata?.reviewer_name)
  const reviewTitle = getMetafieldValue(review.metadata?.review_title)
  const reviewContent = getMetafieldValue(review.metadata?.review_content)
  const verified = review.metadata?.verified_purchase
  const ratingValue = review.metadata?.rating
  const rating = typeof ratingValue === 'number' 
    ? ratingValue 
    : parseInt(getMetafieldValue(ratingValue)) || 0
  const reviewDate = getMetafieldValue(review.metadata?.review_date)
  const product = review.metadata?.product

  return (
    <div className="bg-ivory border border-stone/10 p-8 md:p-10">
      <div className="flex items-start justify-between mb-4">
        <StarRating rating={rating} />
        {verified && (
          <span className="text-xs uppercase tracking-widest-xl text-champagne flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified
          </span>
        )}
      </div>
      {reviewTitle && (
        <h4 className="text-xl font-serif mb-3">{reviewTitle}</h4>
      )}
      {reviewContent && (
        <p className="text-stone leading-relaxed mb-6">{reviewContent}</p>
      )}
      <div className="pt-6 border-t border-stone/10 flex items-center justify-between">
        <div>
          {reviewerName && (
            <p className="font-medium text-sm">{reviewerName}</p>
          )}
          {reviewDate && (
            <p className="text-xs text-stone mt-1">
              {new Date(reviewDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
        </div>
        {showProduct && product && (
          <p className="text-xs text-stone italic">
            on {getMetafieldValue(product.metadata?.product_name) || product.title}
          </p>
        )}
      </div>
    </div>
  )
}