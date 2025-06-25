"use client"; // This directive is required for client-side functionality in App Router components

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import toast, { Toaster } from 'react-hot-toast'; // ONLY ADDITION: Import toast and Toaster
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter(); // Initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous inline errors
    setSuccessMessage(""); // Clear previous inline success messages
    setLoading(true);

    // --- Client-side validation ---
    if (!email) {
      setError("Please enter your email address.");
      toast.error("Please enter your email address."); // ONLY ADDITION: Toast for validation error
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address."); // ONLY ADDITION: Toast for validation error
      setLoading(false);
      return;
    }

    // --- Simulate API Call to Send OTP ---
    console.log("Requesting OTP for:", email);

    try {
      // In a real application, you would send this email to your backend:
      // const response = await fetch('/api/request-otp', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      //   setSuccessMessage(data.message || 'OTP sent to your email.');
      //   toast.success(data.message || 'OTP sent successfully! Please check your email.'); // ONLY ADDITION: Success toast
      //   // Navigate to OTP verification page
      //   router.push(`/otp-verification?email=${encodeURIComponent(email)}`);
      // } else {
      //   setError(data.message || 'Failed to send OTP. Please try again.'); 
      //   toast.error(data.message || 'Failed to send OTP. Please try again.'); // ONLY ADDITION: Error toast
      // }

      // --- Simulation for demonstration ---
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      if (email === "test@example.com") {
        setSuccessMessage("OTP sent successfully! Redirecting...");
        toast.success("OTP sent successfully! Please check your email."); // ONLY ADDITION: Success toast
        router.push(`/Otp-Verification?email=${encodeURIComponent(email)}`);
      } else {
        setError("Email not found or failed to send OTP. (Simulated)");
        toast.error("Email not found or failed to send OTP."); // ONLY ADDITION: Error toast
      }
    } catch (err) {
      console.error("OTP request error:", err);
      setError("An unexpected error occurred. Please try again.");
      toast.error("An unexpected error occurred. Please try again."); // ONLY ADDITION: Catch-all error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="w-1/3 p-10 py-30 border-[#FEFEFECC] shadow rounded-2xl mx-auto border flex flex-col items-center justify-center">
        <h2 className="text-center my-5 text-3xl font-normal">Forgot password ?</h2>

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center justify-center">
          <div>
            <label
              htmlFor="email"
              className="block text-[#232323] text-sm font-normal mb-2"
            >
              Email 
            </label>
            <input
              type="email"
              id="email"
              className="w-[450px] h-[51px] p-3 text-[D9D9D9] rounded-md border border-[#E0E0E0] focus:outline-none focus:ring-2"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending ..." : "Send Code"}
          </Button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}