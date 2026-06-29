"use client";

import {
    MdOutlineDarkMode,
    MdOutlineLightMode
} from "react-icons/md";

import { useTheme }
from "@/contexts/ThemeContext";
import Image from "next/image";

// src/components/navbar/Navbar.jsx
import Link from "next/link";
import styles from "./Navbar.module.css";


export default function Navbar() {

    const {
        theme,
        toggleTheme
    } = useTheme();

    return (
        <nav className={styles.navbar}>

            {/* Left Section */}
            <Image
                src={
                    theme === "light"
                        ? "/logo-light.png"
                        : "/logo-dark.png"
                }
                alt="Xebia Logo"
                width={140}
                height={40}
                className={styles.Xebialogo}
            />

            {/* Middle Section, Ghansham sir asked to remove this */}
            {/* <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Want to learn?"
                    className={styles.searchInput}
                />
            </div> */}

            {/* Right Section */}
            <div className={styles.links}>

                <button className={styles.themeButton} onClick={toggleTheme} >
                    {
                        theme === "light"
                            ? <MdOutlineDarkMode />
                            : <MdOutlineLightMode />
                    }

                </button>

                <Link href="/login">Login</Link>

                <Link href="/faq">
                    FAQ's
                </Link>

                <Link href="/contact"> Contact </Link>

                <button className={styles.signupButton}>
                    SignUp
                </button>

            </div>

        </nav>
    );
}