import summerTips from "@/data/summerTips";
import { Sun, Droplet, Shirt, Clock, Heart, Eye, HelpCircle } from "lucide-react";

const IconMap = {
    Sun: Sun,
    Droplet: Droplet,
    Shirt: Shirt,
    Clock: Clock,
    Heart: Heart,
    Eye: Eye,
};

const SummerCareTips = () => {
    return (
        <section className="py-20 bg-bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-3">Summer Care Tips</h2>

                    <p className="text-stone-500 text-base max-w-xl mx-auto">Stay safe and healthy under the sun with our expert advice.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        summerTips.map(({ id, iconName, title, description }) => {
                            const Icon = IconMap[iconName] ?? HelpCircle;

                            return (
                                <div key={id} className="p-8 flex gap-4 rounded-4xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-primary/10 p-3 rounded-full h-fit shrink-0">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">{title}</h3>

                                        <p className="text-sm text-stone-600">{description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SummerCareTips
