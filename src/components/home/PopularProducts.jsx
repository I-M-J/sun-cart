import products from "@/data/products.json";
import ProductCard from "../products/ProductCard";

const popularProducts = () => {
    const featuredProducts = products.filter(product => product.isFeatured).slice(0, 3);

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-3 font-sans">Popular Products</h2>

                    <p className="text-stone-500 text-base max-w-xl mx-auto">Our most loved summer essentials, handpicked just for you.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default popularProducts;