/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/app/layout.js
 *
 * Purpose:
 * Defines the root layout for the entire application.
 * This file wraps every page with global providers,
 * metadata, styles, and common HTML structure.
 *
 * Responsibilities:
 * - Imports global styles.
 * - Configures application metadata.
 * - Provides theme management using ThemeProvider.
 * - Defines the root HTML and BODY elements.
 * ==========================================================
 */

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