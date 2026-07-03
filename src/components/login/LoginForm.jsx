"use client";
import styles from "./LoginForm.module.css";
import { MdOutlineLock } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { useTheme }
from "@/contexts/ThemeContext";
import Image from "next/image";

export default function LoginPage() {
      const { theme } = useTheme();
  return (
    <section className={styles.loginSection}>
      {/* Right Side: Login Form */}
      <div className={styles.loginFormBox}>
        <div className={styles.loginFormValue}>
          <form>
            <Image
                src={"/logo-light.png"
                }
                alt="Xebia Logo"
                width={200}
                height={70}
                className={styles.Xebialogo}
            />
            <h2 className={styles.loginHeading}>Welcome Back!</h2>
            <p className={styles.loginSubHeading}>
            Sign in to your account
            </p>

            <div className={styles.inputBox}>
              <MdAlternateEmail className={styles.icon} />

              <input type="email" id="email" placeholder=" " required />

              <label htmlFor="email">Email</label>
            </div>

            <div className={styles.inputBox}>
              
              <MdOutlineLock  className={styles.icon} />

              <input type="password" id="password" placeholder=" " required />

              <label htmlFor="password">Password</label>
            </div>

            <div className={styles.forget}>
              <label>
                <input type="checkbox" /> Remember Me
              </label>

              <a href="#">Forget Password?</a>
            </div>

            <button
              type="submit"
              className={styles.loginButton}
            >
              Login
            </button>

            <div className={styles.signup}>
              <p>
                Don't Have An Account?{" "}
                <a href="/register">SignUp</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}