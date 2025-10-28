"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./ReferalSection.module.scss";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

const ReferalSection = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const validateEmail = (email: string) => {
    return EMAIL_REGEX.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (isSubmitted || !isValidEmail) {
      setIsValidEmail(true);
      setMessage("");
      setIsSubmitted(false);
    }
  };

  const saveEmail = async (validEmail: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: validEmail }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message || "Saving failed.");
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  const inputClassName = `${styles.emailInput} ${
    isSubmitted && !isValidEmail ? styles.inputError : ""
  }`;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setIsSubmitted(true);

    const currentIsValid = validateEmail(email);
    setIsValidEmail(currentIsValid);

    if (currentIsValid) {
      const saveSuccessful = await saveEmail(email);

      if (saveSuccessful) {
        setMessage(
          `Success! An invite has been sent to ${email}. Email saved.`
        );
      } else {
        setMessage(
          `Success! An invite has been sent, but saving the email failed.`
        );
        setIsValidEmail(false);
      }

      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <>
      <h1 className={styles.title}>Refer Friends and Get Real Rewards</h1>
      <section className={styles.referalSection}>
        <div className={styles.contentWrapper}>
          <Image
            src="/icons/refer-friends.svg"
            alt="refer friends"
            width={120}
            height={128}
          />
          <h2 className={styles.subtitle}>Refer friends and get rewards</h2>
          <p className={styles.description}>
            Refer your friends to us and earn hotel booking vouchers. We'll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          <form
            onSubmit={handleSubmit}
            className={styles.formContainer}
            noValidate
          >
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className={inputClassName}
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Get Link
            </button>
          </form>
          {isSubmitted && message && (
            <p
              id="email-feedback"
              className={`${styles.feedbackMessage} ${
                !isValidEmail ? styles.errorMessage : styles.successMessage
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ReferalSection;
