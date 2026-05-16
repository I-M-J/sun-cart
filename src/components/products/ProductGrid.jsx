"use client"
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import products from "@/data/products.json";

const categories = [
    "All",
    "Accessories",
    "Clothing",
    "Skincare",
    "Beach Essentials",
    "Drinkware",
    "Footwear",
];

const sortOptions = [
    { key: "featured", label: "Featured" },
    { key: "price-asc", label: "Price: Low to High" },
    { key: "price-desc", label: "Price: High to Low" },
    { key: "rating", label: "Highest Rated" },
];

const ProductGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("featured");

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products];

        if (selectedCategory !== "All") {
            result = result.filter((p) => p.category === selectedCategory);
        }

        switch (sortOption) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price);
                break;

            case "price-desc":
                result.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;
            case "featured":

            default:
                result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
                break;
        }

        return result;
    }, [selectedCategory, sortOption]);

    return (
        <section className="py-12 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div className="w-full md:w-auto pb-2 md:pb-0 flex flex-wrap items-center justify-center gap-2">
                        {
                            categories.map((category) => (
                                <button key={category} onClick={(e) => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap 
                                    ${selectedCategory === category
                                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/30 border-transparent"
                                        : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground border border-white/10"}`}>
                                    {category}
                                </button>
                            ))
                        }
                    </div>

                    <div className="w-full md:w-56 shrink-0">
                        <label className="block text-xs font-medium text-foreground/60 mb-1 ml-1">Sort By</label>

                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition cursor-pointer"
                        >
                            {
                                sortOptions.map((option) => (
                                    <option key={option.key} value={option.key}>
                                        {option.label}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        filteredAndSortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>

                {
                    filteredAndSortedProducts.length === 0 && (
                        <div className="text-center py-20 text-foreground/40">
                            No products found in this category.
                        </div>
                    )
                }

            </div>
        </section>
    )
}

export default ProductGrid
