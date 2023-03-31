// utils
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
    // sesion destructure
    const { data: session } = useSession();

    // display if user is logged in
    if (session) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="flex items-center flex-col gap-2">
                    <h3 className="text-2xl font-medium">Logged In</h3>
                    <p className="text-lg">Welcome {session.user.email}</p>
                    <button
                        className="border rounded-md px-3 py-2 font-medium transition-all border-rose-500 text-rose-500 hover:bg-rose-500/20"
                        onClick={() => signOut()}>
                        Sign Out
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col  items-center gap-2">
                <h3 className="text-2xl font-medium">Not Logged In</h3>
                <p className="text-lg">Sign in to see your details</p>
                <button
                    className="border rounded-md px-3 py-2 font-medium transition-all border-sky-500 text-sky-500 hover:bg-sky-500/20"
                    onClick={() => signIn("github")}>
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default Home;
