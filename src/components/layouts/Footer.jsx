import Link from "next/link";
import { Sun } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-foreground text-stone-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Sun className="h-8 w-8 text-primary" />
                            <span className="font-display font-bold text-2xl text-white">SunCart</span>
                        </Link>

                        <p className="text-sm text-stone-400">Your ultimate destination for summer essentials. Keep it cool and stay protected.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Shop</h3>

                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link href="/products?category=Accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
                            <li><Link href="/products?category=Clothing" className="hover:text-primary transition-colors">Clothing</Link></li>
                            <li><Link href="/products?category=Skincare" className="hover:text-primary transition-colors">Skincare</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Support</h3>

                        <ul className="space-y-2 text-sm">
                            <li><span className="hover:text-primary transition-colors cursor-pointer">FAQ</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Shipping</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Returns</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Newsletter</h3>

                        <p className="text-sm mb-4">Subscribe to get special offers and updates.</p>

                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-stone-800 text-white px-3 py-2 rounded-md text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
                            />

                            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#E85555] transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
                    <p>&copy; {new Date().getFullYear()} SunCart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
