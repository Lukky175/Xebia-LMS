/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/components/login/LoginForm.jsx
 *
 * Purpose:
 * Renders the user authentication interface for
 * accessing the Xebia Learning Platform.
 *
 * Responsibilities:
 * - Display the login form UI.
 * - Collect user credentials.
 * - Provide secondary authentication actions.
 * - Redirect users to support channels when needed.
 * - Maintain responsive behaviour across devices.
 *
 * Dependencies:
 * - Next.js Image component for optimized assets.
 * - Next.js Link component for internal navigation.
 * - React Icons for form field indicators.
 * - CSS Modules for component-scoped styling.
 *
 * Notes:
 * - This component currently focuses on presentation.
 * - Authentication logic, validation, and API
 *   integration will be implemented in future phases.
 * ==========================================================
 */

"use client";

import Image from "next/image";
import Link from "next/link";

import { MdOutlineLock, MdAlternateEmail } from "react-icons/md";

import styles from "./LoginForm.module.css";

/**
 * LoginForm Component
 *
 * @returns {JSX.Element}
 * A login interface containing:
 * - Company branding
 * - Email and password inputs
 * - Remember Me functionality
 * - Password recovery placeholder
 * - Administrator contact support
 */
export default function LoginForm() {

    return (
        <section className={styles.loginSection}>

            {/* Authentication card */}
            <div className={styles.loginFormBox}>

                <div className={styles.loginFormValue}>

                {/* Floating labels depend on an empty
                    placeholder value (" ") so CSS can
                    determine whether an input contains text. */}
                    <form>

                        <Image
                            src="/logo-light.png"
                            alt="Xebia Logo"
                            width={200}
                            height={70}
                            className={styles.Xebialogo}
                        />

                        <h2 className={styles.loginHeading}>
                            Welcome Back!
                        </h2>

                        <p className={styles.loginSubHeading}>
                            Sign in to your account
                        </p>


                        {/* Email field */}
                        <div className={styles.inputBox}>

                            <MdAlternateEmail
                                className={styles.icon}
                            />

                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                required
                            />

                            <label htmlFor="email">
                                Email
                            </label>

                        </div>


                        {/* Password field */}
                        <div className={styles.inputBox}>

                            <MdOutlineLock
                                className={styles.icon}
                            />

                            <input
                                type="password"
                                id="password"
                                placeholder=" "
                                required
                            />

                            <label htmlFor="password">
                                Password
                            </label>

                        </div>


                        {/* Secondary authentication actions */}
                        <div className={styles.forget}>

                            <label>
                                <input type="checkbox" />
                                {" "}Remember Me
                            </label>

                            {/* Placeholder link.
                                Replace with the password recovery page
                                once the authentication workflow exists. */}
                            <a href="#">
                                Forgot Password?
                            </a>

                        </div>


                        <button
                            type="submit"
                            className={styles.loginButton}
                        >
                            Login
                        </button>


                        {/* Support contact for authentication issues */}
                        <div className={styles.signup}>

                            <p>
                                Trouble Signing In?{" "}

                                <Link href="/contact">
                                    Contact Administrator
                                </Link>

                            </p>

                        </div>

                        <div className={styles.loginFooter}>
                            © 2026 Xebia Learning Platform.
                            All rights reserved.
                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
}