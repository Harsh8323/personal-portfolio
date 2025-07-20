"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    let isValid = true;
    const newFormData = { ...formData };

    // Validate name
    if (!formData.name.value.trim()) {
      newFormData.name.error = "Name is required";
      isValid = false;
    } else {
      newFormData.name.error = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.value.trim()) {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.value)) {
      newFormData.email.error = "Please enter a valid email address";
      isValid = false;
    } else {
      newFormData.email.error = "";
    }

    // Validate message
    if (!formData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      isValid = false;
    } else if (formData.message.value.trim().length < 10) {
      newFormData.message.error = "Message must be at least 10 characters long";
      isValid = false;
    } else {
      newFormData.message.error = "";
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.value.trim(),
          email: formData.email.value.trim(),
          message: formData.message.value.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData(defaultFormState);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof typeof defaultFormState,
    value: string
  ) => {
    setFormData({
      ...formData,
      [field]: {
        value,
        error: "",
      },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`p-4 mb-4 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-red-100 text-red-700 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            className={`bg-neutral-100 focus:outline-none focus:ring-2 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
              formData.name.error
                ? "focus:ring-red-200 border border-red-300"
                : "focus:ring-neutral-200"
            }`}
            value={formData.name.value}
            onChange={(e) => handleInputChange("name", e.target.value)}
            disabled={isSubmitting}
          />
          {formData.name.error && (
            <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address"
            className={`bg-neutral-100 focus:outline-none focus:ring-2 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
              formData.email.error
                ? "focus:ring-red-200 border border-red-300"
                : "focus:ring-neutral-200"
            }`}
            value={formData.email.value}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={isSubmitting}
          />
          {formData.email.error && (
            <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <textarea
          placeholder="Your Message"
          rows={10}
          className={`bg-neutral-100 focus:outline-none focus:ring-2 px-2 py-2 rounded-md text-sm text-neutral-700 w-full ${
            formData.message.error
              ? "focus:ring-red-200 border border-red-300"
              : "focus:ring-neutral-200"
          }`}
          value={formData.message.value}
          onChange={(e) => handleInputChange("message", e.target.value)}
          disabled={isSubmitting}
        />
        {formData.message.error && (
          <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>
        )}
      </div>

      <button
        className={`w-full px-2 py-2 mt-4 rounded-md font-bold transition-colors ${
          isSubmitting
            ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
