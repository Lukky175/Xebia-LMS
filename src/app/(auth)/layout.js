import Navbar from "@/components/navbar/Navbar";

export default function AuthLayout({
    children,
}) {

    return (
        <>
            <Navbar />

            {children}
        </>
    );
}