import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Package, Settings } from "lucide-react";
import { redirect } from "next/navigation";

const ProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/auth/login");
    }

    const user = session?.user;

    return (
        <div className="min-h-screen bg-bg-muted py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold font-display text-foreground mb-8">My Profile</h1>

                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden mb-8">
                    <div className="p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
                        <div>
                            {
                                (user?.image && user?.image.startsWith("https://")) ? (
                                    <Image
                                        src={user?.image}
                                        alt={user?.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full object-cover shrink-0"
                                    />
                                ) : (
                                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-3xl font-bold text-primary">
                                        {user?.name?.charAt(0).toUpperCase()}
                                    </div>
                                )
                            }
                        </div>

                        <div className="grow text-center sm:text-left">
                            <h2 className="text-2xl font-bold text-foreground mb-1">{user?.name}</h2>

                            <p className="text-stone-500 mb-6">{user?.email}</p>

                            <Link href="/profile/edit" className="btn btn-primary text-white rounded-full h-fit px-4 py-2">Update Information</Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                        <div className="flex items-center gap-3 mb-6">
                            <Package className="w-6 h-6 text-primary" />

                            <h3 className="text-xl font-bold text-foreground">Recent Orders</h3>
                        </div>

                        <p className="text-stone-500">You haven't placed any orders yet.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="w-6 h-6 text-primary" />

                            <h3 className="text-xl font-bold text-foreground">Account Settings</h3>
                        </div>

                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-stone-600 hover:text-primary transition-colors">Payment Methods</Link>
                            </li>

                            <li>
                                <Link href="#" className="text-stone-600 hover:text-primary transition-colors">Addresses</Link>
                            </li>

                            <li>
                                <Link href="#" className="text-stone-600 hover:text-primary transition-colors">Notification Preferences</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;