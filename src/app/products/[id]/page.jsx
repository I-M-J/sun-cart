import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import RatingStars from "@/components/ui/RatingStars";
import products from "@/data/products.json";
import ProductCard from "@/components/products/ProductCard";

const ProductDetailsPage = async ({ params }) => {
    let { id } = await params;
    id = parseInt(id);

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/products" className="btn">Back to Products</Link>
                </div>
            </div>
        );
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <section className="bg-background min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-4">
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <p className="text-sm text-stone-400 uppercase mb-2 font-semibold">{product.category}</p>

                            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight mb-2">{product.name}</h1>

                            <p className="text-lg text-primary font-medium mb-4">{product.brand}</p>

                            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
                        </div>

                        <div className="flex items-end gap-3 border-y border-stone-200 py-6">
                            <span className="text-4xl font-bold text-foreground">${product.price}</span>
                            {
                                product.discount > 0 && (
                                    <span className="text-xl line-through text-stone-400 mb-1">
                                        ${product.originalPrice}
                                    </span>
                                )
                            }
                        </div>

                        <div className="space-y-4">
                            <p className="text-stone-600 text-base leading-relaxed">{product.description}</p>

                            <ul className="space-y-2">
                                {
                                    product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-stone-600">
                                            <Check className="w-4 h-4 text-success mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-2">
                                {
                                    product.stock > 0 ? (
                                        <>
                                            <Check className="w-5 h-5 text-success" />
                                            <span className="text-sm font-medium text-success">In Stock ({product.stock} available)</span>
                                        </>
                                    ) : (
                                        <>
                                            <X className="w-5 h-5 text-danger" />
                                            <span className="text-sm font-medium text-danger">Out of Stock</span>
                                        </>
                                    )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="btn flex-1 font-semibold bg-blue-500/90 text-base text-white rounded-full px-4 py-2 h-fit"
                                    disabled={product.stock === 0}
                                >
                                    Add to Cart
                                </button>

                                <button
                                    className="btn btn-ghost bg-transparent text-base rounded-full px-4 py-2 h-fit font-semibold text-stone-600 border-stone-300 hover:bg-stone-50"
                                >
                                    Save for Later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    relatedProducts.length > 0 && (
                        <div className="pt-16 border-t border-stone-200">
                            <h2 className="text-2xl font-bold font-sans text-foreground mb-8">You May Also Like</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    relatedProducts.map((p) => (
                                        <ProductCard key={p.id} product={p} />
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}


export default ProductDetailsPage;