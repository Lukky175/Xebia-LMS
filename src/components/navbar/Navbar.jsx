"use client";

import Link from "next/link";
import Image from "next/image";

import {
    MdOutlineDarkMode,
    MdOutlineLightMode,
} from "react-icons/md";

import { useTheme } from "@/contexts/ThemeContext";

import styles from "./Navbar.module.css";

export default function Navbar() {

    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={styles.navbar}>

            <div className={styles.container}>

                {/* Left Section */}
                <Link
                    href="/"
                    className={styles.logoContainer}
                >
                    <Image
                        src={
                            "/logo-light.png"
                        }
                        alt="Xebia Logo"
                        width={140}
                        height={40}
                        className={styles.logo}
                        priority
                    />
                </Link>

                {/* Middle Section */}
                <div className={styles.links}>

                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/faq">
                        FAQ
                    </Link>

                    <Link href="/contact">
                        Contact Us
                    </Link>

                </div>

                {/* Right Section */}
                <div className={styles.actions}>

                    <button
                        className={styles.themeButton}
                        onClick={toggleTheme}
                    >
                        {
                            theme === "light"
                                ? <MdOutlineDarkMode />
                                : <MdOutlineLightMode />
                        }
                    </button>

                    <span className={styles.divider}>
                        |
                    </span>

                    <Link
                        href="/login"
                        className={styles.ctaButton}
                    >
                        Get Started
                    </Link>

                </div>

            </div>

        </nav>
    );
}