import ProductGrid from "@/components/products/ProductGrid"

const ProductsPage = () => {
    return (
        <section className="bg-bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">All Products</h1>

                <p className="text-stone-500 text-lg max-w-2xl mx-auto">Discover everything you need for the perfect summer, from stylish sunglasses to protective skincare.</p>
            </div>

            <ProductGrid />
        </section>
    )
}

export default ProductsPage
