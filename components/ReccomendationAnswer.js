app.component('reccomendation-answer', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    `<div>
        <p>This product is recommended</p>
        <p>This producti is not recommended</p>
    </div>`
}
)