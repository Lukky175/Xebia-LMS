/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/app/(dashboard)/layout.js
 *
 * Purpose:
 * Defines the shared layout for authenticated dashboard
 * pages and internal application modules.
 *
 * Why a Route Group?
 * The (dashboard) folder separates protected user
 * experiences from public-facing marketing pages,
 * enabling dashboard-specific layouts, navigation,
 * authentication guards, and future scalability.
 *
 * Note:
 * Additional dashboard components and shared UI
 * elements will be integrated as the platform evolves.
 * ==========================================================
 */

/**
 * ==========================================================
 * Dashboard Route Group Layout
 * ==========================================================
 */

export default function DashboardLayout({
    children,
}) {

    return (
        <>
            {children}
        </>
    );
}