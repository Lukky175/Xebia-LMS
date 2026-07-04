/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/app/page.js
 *
 * Purpose:
 * This is the root application page ("/").
 * Users visiting the base URL are automatically redirected
 * to the Home page to maintain a single entry point into
 * the application.
 *
 * Route Flow:
 * "/"  --->  "/home"
 * ==========================================================
 */

// Default page is /home.

import { redirect }
from "next/navigation";

export default function RootPage() {
    redirect("/home");
}