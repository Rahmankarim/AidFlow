"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Redirecting to sign-in page...");
        router.push("/sign-in");
      } else {
        alert(data.message || "Error during signup");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AkpagerLayout>
      <PageBanner pageName={"Sign Up"} />
      <section className="sign-up-section py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="sign-in-up-wrapper">
                <form onSubmit={handleSubmit}>
                  <h4 className="form-title">Create Your Account</h4>
                  <div className="form-group">
                    <label htmlFor="username">
                      <i className="far fa-user" />
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="far fa-lock" />
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">
                      <i className="far fa-lock" />
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="theme-btn w-100"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>
                  <div className="form-note">
                    <p>
                      Already have an account?{" "}
                      <Link href="/sign-in">Log In</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};

export default Page;
