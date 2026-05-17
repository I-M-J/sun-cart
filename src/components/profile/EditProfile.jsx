"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const EditPage = ({ user }) => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: user?.name,
            image: user?.image,
        }
    });

    const onSubmitInfo = async (formData) => {

        const { error } = await authClient.updateUser({
            name: formData.name,
            image: formData.image,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Profile updated successfully");

        router.push("/profile");
    };

    const onSubmitPassword = async (formData) => {

        const { error } = await authClient.changePassword({
            currentPassword: formData.password,
            newPassword: formData.newPassword,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Password updated successfully");

        router.push("/profile");
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6 bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
                <h1 className="text-3xl font-bold text-foreground font-display text-center">
                    Update Profile
                </h1>

                <form onSubmit={handleSubmit(onSubmitInfo)} className="space-y-4">
                    <fieldset className="fieldset space-y-4">
                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Full Name</label>
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
                                className="input text-base h-fit w-full px-4 py-2 border border-stone-300 rounded-lg mb-1" placeholder="https://"
                                {...register("image")} />
                            {errors.image && <p className="text-danger text-xs">{errors.image.message}</p>}
                        </div>

                        <button type="submit" className="btn h-fit w-full bg-blue-500/90 text-white px-4 py-3 text-base font-semibold rounded-full">{isSubmitting ? <span className="loading loading-spinner loading-md text-white"></span> : "Update Info"}</button>

                    </fieldset>
                </form>

                <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-4">
                    <fieldset className="fieldset space-y-4">
                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">Current Password</label>
                            <input
                                type="password"
                                className="input text-base w-full px-4 py-2 border border-stone-300 rounded-lg mb-1" placeholder="Enter password"
                                {...register("password", { required: "Name is required" })} />
                            {errors.password && <p className="text-danger text-xs">{errors.password.message}</p>}
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-stone-700 mb-1">New Password</label>
                            <input
                                type="password"
                                className="input text-base h-fit w-full px-4 py-2 border border-stone-300 rounded-lg mb-1" placeholder="Enter new password"
                                {...register("newPassword", { required: "New password is required" })} />
                            {errors.newPassword && <p className="text-danger text-xs">{errors.newPassword.message}</p>}
                        </div>

                        <button type="submit" className="btn h-fit w-full bg-blue-500/90 text-white px-4 py-3 text-base font-semibold rounded-full">{isSubmitting ? <span className="loading loading-spinner loading-md text-white"></span> : "Update Password"}</button>

                        <Link href="/profile" className="btn h-fit w-full bg-primary/80 text-white px-4 py-3 text-base font-semibold rounded-full">Back to Profile</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default EditPage;