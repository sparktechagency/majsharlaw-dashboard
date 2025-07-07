'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button';
import SectionTitle from '@/app/shared/SectionTitle';

// Child component
function OtpVerificationForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter();

  const [otp, setOtp] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [verificationLoading, setVerificationLoading] = useState(false);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setVerificationError('');
    setVerificationLoading(true);

    if (!otp) {
      setVerificationError('Please enter the OTP.');
      toast.error('Please enter the OTP.');
      setVerificationLoading(false);
      return;
    }

    console.log(`Verifying OTP: ${otp} for email: ${email}`);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (otp === '123456') {
        toast.success('OTP Verified! Redirecting to password reset...');
        router.push(`/set-new-password?email=${encodeURIComponent(email || '')}`);
      } else {
        setVerificationError('Invalid OTP. Please try again.');
        toast.error('Invalid OTP. Please try again.');
      }
    } catch (err) {
      console.error('OTP verification error:', err);
      setVerificationError('An error occurred during OTP verification.');
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setVerificationLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="p-10 py-30 border-[#E5E7EB] shadow rounded-2xl mx-auto border flex flex-col items-center justify-center bg-white text-black">
        <section className="text-center">
          <SectionTitle
            heading="Verification code"
            subHeading="We sent a reset link to contact@dscode...com
enter 5 digit code that is mentioned in the email"
          />
        </section>
        <form onSubmit={handleOtpSubmit} className="flex flex-col justify-center items-center">
          <div className="mt-6">
            <InputOTP maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              required>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSeparator />
                <InputOTPSlot index={1} />
                <InputOTPSeparator />
                <InputOTPSlot index={2} />
                <InputOTPSeparator />
                <InputOTPSlot index={3} />
                <InputOTPSeparator />
                <InputOTPSlot index={4} />
                <InputOTPSeparator />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {verificationError && (
            <p className="text-red-500 text-sm text-center mt-2">{verificationError}</p>
          )}

          <Button
            type="submit"
            className="mt-10"
            disabled={verificationLoading}
          >
            {verificationLoading ? 'Verifying...' : 'Verify Code'}
          </Button>
        </form>

        <p className="mt-6 text-gray-600 text-sm">
          You have not received the email?{' '}
          <Link href="#" className="text-[#6DA40A] text-base underline">Resend</Link>
        </p>
      </div>
    </div>
  );
}

// Parent component
export default function OtpVerificationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white text-black">
      <Toaster position="top-center" reverseOrder={false} />

      <Suspense fallback={<div className="text-black">Loading...</div>}>
        <OtpVerificationForm />
      </Suspense>
    </div>
  );
}
