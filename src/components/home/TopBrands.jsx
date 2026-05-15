import brands from "@/data/brands";
import Image from "next/image";

const TopBrands = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-3">Top Brands</h2>

                    <p className="text-stone-500 text-base max-w-xl mx-auto">Discover premium summer collections from world-renowned brands.</p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        brands.map(brand => (
                            <div key={brand.id} className="group relative h-48 overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>

                                <Image src={brand.image} alt={brand.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />

                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="font-display font-bold text-2xl text-white drop-shadow-md">{brand.name}</h3>

                                    <p className="text-sm text-white/90 mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{brand.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TopBrands
