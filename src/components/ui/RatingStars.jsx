import { Star } from "lucide-react";

const RatingStars = ({ rating, reviewCount }) => {
    return (
        <div className="flex items-center gap-1">
            <div className="flex text-warning">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-current' : 'text-stone-300'}`}
                    />
                ))}
            </div>
            <span className="text-xs text-stone-500 font-medium ml-1">
                {rating.toFixed(1)} ({reviewCount})
            </span>
        </div>
    );
};

export default RatingStars;
