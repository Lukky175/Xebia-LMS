// src/components/footer/Footer.jsx

import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {

    return (

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

                    <Link href="/home">
                        Home
                    </Link>

                    <Link href="/faq">
                        FAQ
                    </Link>

                    <Link href="/contact">
                        Contact
                    </Link>

                </div>


                <div>

                    <h4>Resources</h4>

                    <a href="#">
                        Course Catalog
                    </a>

                    <a href="#">
                        Case Studies
                    </a>

                    <a href="#">
                        Blog
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

    );
}