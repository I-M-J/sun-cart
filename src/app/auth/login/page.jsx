import Link from "next/link";

const LoginPage = () => {
    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-bg-muted py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-display text-foreground">Sign In</h2>

                    <p className="mt-2 text-stone-500">Welcome back to SunCart</p>
                </div>

                <form>
                    <fieldset className="fieldset space-y-4">

                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Email Address</label>
                            <input type="email" className="input input-primary text-base w-full px-4 py-2 border border-stone-300 rounded-lg focus:border-primary" placeholder="Your Email" />
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Password</label>
                            <input type="password" className="input input-primary text-base h-fit w-full px-4 py-2 border border-stone-300 rounded-lg focus:border-primary" placeholder="Password" />
                        </div>

                        <button className="btn h-fit w-full bg-blue-500/90 text-white px-4 py-3 text-base font-semibold rounded-full">Sign In</button>

                        <button className="btn h-fit w-full bg-primary/80 text-white px-4 py-3 text-base font-semibold rounded-full">Login with Google</button>
                    </fieldset>
                </form>

                <p className="text-center text-sm text-stone-600">
                    Don't have an account?{" "}

                    <Link href="/auth/register" className="text-primary font-semibold hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default LoginPage;
