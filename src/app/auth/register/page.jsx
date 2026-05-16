"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";


const RegisterPage = () => {
    const wasLoggedIn = useRef(true);
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    useEffect(() => {
        if (user && wasLoggedIn) {
            toast.success("You are already logged in");
            router.replace("/");
        }
    }, [user, router]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {

        const { name, photoURL, email, password } = data;

        const { data: signUpData, error: signUpError } = await authClient.signUp.email({
            name: name,
            image: photoURL,
            email: email,
            password: password,
            callbackUrl: "/",
        });

        if (signUpError) {
            toast.error(signUpError.message);
        }

        if (signUpData) {
            toast.success("Registration successful");
            router.replace("/");
        }
    }

    if (isPending || user) return null;

    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-bg-muted py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-display text-foreground">Create Account</h2>

                    <p className="mt-2 text-stone-500">Welcome to SunCart</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset space-y-4">

                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Name</label>
                            <input
                                type="text"
                                className="input text-base w-full px-4 py-2 border border-stone-300 rounded-lg mb-1" placeholder="Your Name"
                                {...register("name", { required: "Name is required" })} />
                            {errors.name && <p className="text-danger text-xs">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Photo URL</label>
                            <input
                                type="text"
                                className="input text-base w-full px-4 py-2 border border-stone-300 rounded-lg mb-1" placeholder="https://"
                                {...register("photoURL")} />
                            {errors.photoURL && <p className="text-danger text-xs">{errors.photoURL.message}</p>}
                        </div>

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

                        <button className="btn h-fit w-full bg-blue-500/90 text-white px-4 py-3 text-base font-semibold rounded-full">{isSubmitting ? <span className="loading loading-spinner loading-md text-white"></span> : "Sign Up"}</button>

                        <button className="btn h-fit w-full bg-primary/80 text-white px-4 py-3 text-base font-semibold rounded-full">Login with Google</button>
                    </fieldset>
                </form>

                <p className="text-center text-sm text-stone-600">
                    Already have an account?{" "}

                    <Link href="/auth/login" className="text-primary font-semibold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default RegisterPage;
