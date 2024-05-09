app.component('product-recommendation', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    `<div>
        <h3>Recommended Products:</h3>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>`,
    data() {
        return {
            products: [
                { id: 1, title: 'Product A', price: '$1.99' },
                { id: 2, title: 'Product B', price: '$2.99' },
                { id: 3, title: 'Product C', price: '$3.99' }
            ]
        }
    }
}
)