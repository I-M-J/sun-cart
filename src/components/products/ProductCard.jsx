import Image from "next/image";
import Link from "next/link";
import RatingStars from "@/components/ui/RatingStars";

const ProductCard = ({ product }) => {
    const { id, name, brand, price, originalPrice, rating, reviewCount, image, category, discount } = product;

    return (
        <div className="group p-4 rounded-2xl bg-bg-surface hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="relative">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover rounded-xl"
                />
            </div>

            <div className="p-4 space-y-2">
                <p className="text-xs text-stone-400 uppercase tracking-wide">{category}</p>

                <h3 className="font-semibold text-foreground text-base leading-tight truncate">{name}

                </h3>
                <p className="text-sm text-primary font-medium">{brand}</p>

                <RatingStars rating={rating} reviewCount={reviewCount} />

                <div className="flex items-center gap-2 pt-1">
                    <span className="text-lg font-bold text-foreground">
                        ${price}
                    </span>

                    {
                        discount > 0 && (
                            <span className="text-sm line-through text-stone-400">
                                ${originalPrice}
                            </span>
                        )
                    }
                </div>
            </div>

            <div className="pt-0 px-4 pb-4">
                <Link
                    href={`/products/${id}`}
                    className="btn p- w-full bg-blue-500/90 text-white h-fit p-2 text-sm rounded-full font-normal"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
