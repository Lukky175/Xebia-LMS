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
            
        </>
    );
}