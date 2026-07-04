/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/app/(auth)/layout.js
 *
 * Purpose:
 * Provides a shared layout for authentication-related
 * pages.
 *
 * Why a Route Group?
 * The (auth) folder groups pages that require a
 * consistent user experience during authentication
 * workflows while avoiding unnecessary duplication
 * of common UI elements.
 *
 * Current Shared Components:
 * - Navbar
 *
 * Future Additions:
 * - Authentication guards
 * - Dedicated auth layouts
 * - Shared branding and onboarding elements
 * ==========================================================
 */

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