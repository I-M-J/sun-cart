import EditProfile from "@/components/profile/EditProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const EditPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    return (
        <EditProfile user={user} />
    );
}

export default EditPage;