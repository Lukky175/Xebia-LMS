"use client";

import { useState } from "react";

import styles from "./FAQ.module.css";

import { faqItems } from "./faqData";

import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleQuestion = (index) => {
        setActiveIndex((prev) =>
            prev === index ? null : index
        );
    };

    return (
        <>

            {/* HERO */}
            <section className={styles.heroSection}>

                <div className={styles.heroOverlay}>

                    <h1>
                        Frequently Asked Questions
                    </h1>

                    <p>
                        Everything you need to know
                        about our learning platform.
                    </p>

                </div>

            </section>


            {/* FAQ CONTENT */}
            <section className={styles.faqSection}>

                <div className={styles.faqGrid}>

                    {/* LEFT */}
                    <div className={styles.leftContent}>

                        <span className={styles.sectionTag}>
                            FAQ
                        </span>

                        <h2>
                            Frequently Asked
                            <br />
                            <span>Questions</span>
                        </h2>

                        <p>
                            Find answers to common
                            questions about enrollment,
                            certifications, support,
                            and course accessibility.
                            We're here to make your
                            learning journey seamless.
                        </p>

                    </div>


                    {/* RIGHT */}
                    <div className={styles.rightContent}>

                        {faqItems.map(
                            (item, index) => (

                                <div
                                    key={index}
                                    className={
                                        styles.faqItem
                                    }
                                >

                                    <button
                                        className={
                                            styles.question
                                        }

                                        onClick={() =>
                                            toggleQuestion(index)
                                        }
                                    >

                                        <span>
                                            {
                                                item.question
                                            }
                                        </span>

                                        <div
                                            className={
                                                styles.icon
                                            }
                                        >

                                            {
                                                activeIndex === index
                                                    ? <FiMinus />
                                                    : <FiPlus />
                                            }

                                        </div>

                                    </button>


                                    <div
                                        className={`${styles.answerWrapper}
                                        ${
                                            activeIndex === index
                                                ? styles.open
                                                : ""
                                        }`}
                                    >

                                        <div
                                            className={
                                                styles.answer
                                            }
                                        >

                                            {
                                                item.answer
                                            }

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className={styles.helpSection}>

                <h2>
                    Still have questions?
                </h2>

                <p>
                    Our team is always happy
                    to help you.
                </p>

                <a
                    href="/contact"
                    className={styles.helpButton}
                >
                    Contact Us
                </a>

            </section>
            {/* FOOTER */}
            <footer className={styles.footer}>

                <div className={styles.footerContainer}>

                    <div className={styles.footerBrand}>

                        <Image
                            src="/logo-light.png"
                            width={180}
                            height={80}
                            alt="Xebia"
                        />

                        <p>
                            Empowering organizations through
                            cloud, DevOps, AI, and digital
                            transformation.
                        </p>

                    </div>


                    <div>

                        <h4>Company</h4>

                        <a href="/">Home</a>

                        <a href="/about">
                            About
                        </a>

                        <a href="/services">
                            Services
                        </a>

                        <a href="/contact">
                            Contact
                        </a>

                    </div>


                    <div>

                        <h4>Resources</h4>

                        <a href="#">
                            Careers
                        </a>

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms
                        </a>

                    </div>


                    <div>

                        <h4>Get In Touch</h4>

                        <p>
                            Gurugram, Haryana
                        </p>

                        <p>
                            +91 124 664 7000
                        </p>

                        <p>
                            contact@xebia.com
                        </p>

                    </div>

                </div>


                <div className={styles.copyright}>
                    © 2026 Xebia. All rights reserved.
                </div>

            </footer>


        </>
    );
}