"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    if (!email) {
      setError("Please enter your email address.");
      toast.error("Please enter your email address.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    console.log("Requesting OTP for:", email);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email === "test@example.com") {
        setSuccessMessage("OTP sent successfully! Redirecting...");
        toast.success("OTP sent successfully! Please check your email.");
        router.push(`/Otp-Verification?email=${encodeURIComponent(email)}`);
      } else {
        setError("Email not found or failed to send OTP. (Simulated)");
        toast.error("Email not found or failed to send OTP.");
      }
    } catch (err) {
      console.error("OTP request error:", err);
      setError("An unexpected error occurred. Please try again.");
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="w-1/3 p-10 py-30 border-[#FEFEFECC] shadow rounded-2xl mx-auto border flex flex-col items-center justify-center bg-white text-black">
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
              className="w-[450px] h-[51px] p-3 text-[#232323] rounded-md border border-[#E0E0E0] focus:outline-none focus:ring-2"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

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
