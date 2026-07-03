import "./globals.css";

import { ThemeProvider }
from "@/contexts/ThemeContext";

export const metadata = {
    title: "Xebia LMS",
    description:
        "Enterprise Learning Management System",
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">

            <body>

                <ThemeProvider>

                    {children}

                </ThemeProvider>

            </body>

        </html>
    );
}