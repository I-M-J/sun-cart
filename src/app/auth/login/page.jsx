"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
    const wasLoggedIn = useRef(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    useEffect(() => {
        if (user && wasLoggedIn.current) {
            toast.success("You are already logged in");
            router.replace(callbackUrl);
        }
    }, [user, router, callbackUrl]);

    const onSubmit = async (data) => {
        const { email, password } = data;

        const { data: signInData, error: signInError } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackUrl: callbackUrl,
        });

        if (signInError) {
            toast.error(signInError.message);
        }

        if (signInData) {
            wasLoggedIn.current = false;
            toast.success("Login successful");
            router.replace(callbackUrl);
        }
    }

    if (isPending || user) return (
        <section className="bg-bg-muted min-h-dvh flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <span className="animate__animated animate__fadeIn animate__delay-1s loading loading-ring loading-md text-primary" />
        </section>
    );

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-bg-muted py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-display text-foreground">Sign In</h2>

                    <p className="mt-2 text-stone-500">Welcome back to SunCart</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset space-y-4">
                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                className="input text-base w-full px-4 py-2 border border-stone-300 rounded-lg mb-1" placeholder="Your Email"
                                {...register("email", { required: "Email is required" })} />
                            {errors.email && <p className="text-danger text-xs">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="input text-base h-fit w-full px-4 py-2 border border-stone-300 rounded-lg mb-1" placeholder="Password"
                                {...register("password", { required: "Password is required" })} />
                            {errors.password && <p className="text-danger text-xs">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="btn h-fit w-full bg-blue-500/90 text-white px-4 py-3 text-base font-semibold rounded-full"
                        >
                            {isSubmitting ? <span className="loading loading-spinner loading-md text-white"></span> : "Sign In"}
                        </button>
                    </fieldset>
                </form>

                <button onClick={handleGoogleSignIn} className="btn h-fit w-full bg-primary/80 text-white px-4 py-3 text-base font-semibold rounded-full">Login with Google</button>

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
