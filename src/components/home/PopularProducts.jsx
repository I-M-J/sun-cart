import products from "@/data/products.json";

const popularProducts = () => {
    const featuredProducts = products.filter(product => product.isFeatured).slice(0, 3);
}