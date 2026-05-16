import { ShoppingCart, Sun, User } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-100 bg-bg-surface border-b border-stone-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex items-center gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0.5 h-fit md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-bg-surface rounded-box z-50 mt-5 w-52 p-2 shadow space-y-4">
                            <li className="text-xl font-semibold text-stone-600 btn btn-ghost p-2 h-fit w-full"><Link href="/">Home</Link></li>

                            <li className="text-xl font-semibold text-stone-600 btn btn-ghost p-2 h-fit w-full"><Link href="/products">Products</Link></li>

                            <li className="text-xl font-semibold text-stone-600 btn btn-ghost p-2 h-fit w-full">
                                <Link href="/auth/login">
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Sun className="h-8 w-8 text-primary" />

                    <span className="font-display font-bold text-3xl text-foreground">SunCart</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-base font-semibold text-stone-600 hover:text-primary transition-colors">Home</Link>
                    <Link href="/products" className="text-base font-semibold text-stone-600 hover:text-primary transition-colors">Products</Link>
                </div>

                <div className="flex items-center gap-2">
                    <Link href="" className="btn btn-ghost p-1 h-fit">
                        <User className="h-5 w-5 text-stone-600" />
                    </Link>

                    <Link href="" className="btn btn-ghost p-1 h-fit">
                        <ShoppingCart className="h-5 w-5 text-stone-600" />
                    </Link>

                    <Link href="/auth/login" className="btn btn-ghost p-1 h-fit text-lg font-semibold hidden md:flex">
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
