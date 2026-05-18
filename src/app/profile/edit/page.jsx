import EditProfile from "@/components/profile/EditProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const EditPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/auth/login");
    }

    const user = session?.user;

    return (
        <EditProfile user={user} />
    );
}

export default EditPage;