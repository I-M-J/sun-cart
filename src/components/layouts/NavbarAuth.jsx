"use client"
import { authClient } from "@/lib/auth-client";
import { LogIn, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavbarAuth = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log(user);

    if (isPending) {
        return (
            <span className="loading loading-spinner text-primary"></span>
        )
    }

    if (user) {
        return (
            <Link href="/profile" className="flex items-center gap-2">
                {
                    (user.image && user.image.startsWith("https://")) ? (
                        <Image
                            src={user.image}
                            alt={user.name}
                            width={36}
                            height={36}
                            className="rounded-full object-cover"
                        />
                    ) : (
                        <User className="h-5 w-5 text-stone-600" />
                    )
                }
                <span className="text-foreground font-medium text-sm hidden md:block">
                    {user.name}
                </span>

                <button onClick={async () => await authClient.signOut()} className="btn btn-ghost p-1 h-fit text-lg text-danger font-semibold hidden sm:flex">Sign Out</button>

                <button onClick={async () => await authClient.signOut()} className="btn btn-ghost p-1 h-fit text-lg text-danger font-semibold sm:hidden"><LogOut /></button>
            </Link>
        );
    }

    return (
        <div className="flex items-center gap-2">

            <Link href="" className="btn btn-ghost p-1 h-fit">
                <User className="h-5 w-5 text-stone-600" />
            </Link>

            <Link href="/auth/login" className="btn btn-ghost p-1 h-fit text-lg font-semibold hidden sm:flex">
                Sign In
            </Link>

            <Link href="/auth/login" className="btn btn-ghost p-1 h-fit text-lg font-semibold sm:hidden"><LogIn /></Link>
        </div>
    )
}

export default NavbarAuth
