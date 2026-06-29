import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider }
from "@/contexts/ThemeContext";


export const metadata = {
    title: "Xebia LMS",
    description: "Enterprise Learning Management System",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <Navbar />
                    {children}
                </ThemeProvider>

            </body>
        </html>
    );
}