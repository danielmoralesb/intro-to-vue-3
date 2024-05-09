app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    `<div class="review-container">
        <h3>Reviews:</h3>
            <p v-for="(review, index) in reviews" :key="index">
                <span class="name">{{ review.name }}</span> and this is the rating <span class="rating">{{ review.rating }}</span>. This is my review <span class="review">{{ review.review }}</span> and this is my recommendation <span class="recommendation">{{ review.recommendation }}.</span>
            </p>
    </div>`
}
)