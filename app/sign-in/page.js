"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;
    let isValid = true;

    if (!username.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, username: true }));
      isValid = false;
    }
    if (!password.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);

    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim().toLowerCase(),
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        router.push("/");
      } else {
        alert(data.message || "Error during login");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AkpagerLayout>
      <PageBanner pageName={"Sign In"} />
      <section className="sign-in-section py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="sign-in-up-wrapper">
                <form onSubmit={handleSubmit}>
                  <h4 className="form-title">Sign In</h4>
                  <div className="form-group">
                    <label htmlFor="username">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username or Email"
                      value={formData.username}
                      onChange={handleChange}
                      className={errors.username ? "error" : ""}
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
                      className={errors.password ? "error" : ""}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="theme-btn w-100"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Logging In..." : "Login"}
                    </button>
                  </div>
                  <div className="form-note">
                    <p>
                      Don't have an account?{" "}
                      <Link href="/sign-up">Create one</Link>
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
