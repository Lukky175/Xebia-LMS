/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/app/(marketing)/layout.js
 *
 * Purpose:
 * Provides a shared layout for all public-facing
 * marketing pages.
 *
 * Why a Route Group?
 * The (marketing) folder allows multiple pages to
 * reuse common UI elements such as the Navbar and
 * Footer without duplicating code across individual
 * route files.
 *
 * Pages using this layout:
 * - /home
 * - /faq
 * - /contact
 *
 * Note:
 * Component-specific implementation details are
 * documented within their respective component files.
 * ==========================================================
 */

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function MarketingLayout({
    children,
}) {

    return (
        <>
            <Navbar />

            {children}

            <Footer />
        </>
    );
}