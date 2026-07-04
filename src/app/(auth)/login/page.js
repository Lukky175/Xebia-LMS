/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/app/(auth)/login/page.js
 *
 * Purpose:
 * Entry point for the Login page.
 * Delegates authentication UI and related functionality
 * to the LoginForm component.
 * ==========================================================
 */

import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
    return <LoginForm />;
}