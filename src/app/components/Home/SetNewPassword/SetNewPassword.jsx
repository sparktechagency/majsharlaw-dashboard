'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For redirection after password update
import toast, { Toaster } from 'react-hot-toast'; // For toast notifications
import SectionTitle from '@/app/shared/SectionTitle';
import { Button } from '@/components/ui/button';

export default function SetNewPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Client-side validation
    if (!newPassword || !confirmPassword) {
      setError('Please enter both new password and confirm password.');
      toast.error('Please enter both new password and confirm password.');
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      toast.error('New password and confirm password do not match.');
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) { // Basic password length check
      setError('Password must be at least 6 characters long.');
      toast.error('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    console.log('Attempting to update password with:', newPassword);

    try {
      // --- Simulate API Call to Update Password ---
      // In a real application, you would send the new password (and a verification token
      // received from the OTP verification) to your backend:
      // const response = await fetch('/api/reset-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: 'user@example.com', newPassword, token: 'your_otp_token' }),
      // });
      // const data = await response.json();

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate successful password update
      if (newPassword === "newpassword123") { // Example success condition
        toast.success('Password updated successfully! Redirecting to login...');
        console.log('Password updated successfully!');
        // Redirect to login page after successful password update
        router.push('/');
      } else {
        setError('Failed to update password. Please try again. (Simulated)');
        toast.error('Failed to update password. Please try again.');
      }
    } catch (err) {
      console.error('Password update error:', err);
      setError('An unexpected error occurred. Please try again.');
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" >
      <div className=" px-20 py-40 border-[#FEFEFECC] shadow rounded-2xl mx-auto border flex flex-col items-center justify-center">
        <div className='mb-8'>
          <SectionTitle heading="Set a new password" subHeading="Create a new password. Ensure it differs from
previous ones for security"/>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center justify-center">
          <div>
            <label htmlFor="newPassword" className="block text-[#636363] text-base font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                id="newPassword"
                className="w-[450px] h-[51px] p-3 text-[D9D9D9] rounded-lg border border-[#AFAFAF] focus:outline-none focus:ring-2"
                placeholder="**********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              {/* Optional: Eye icon for toggling password visibility. You might need to install Heroicons or use an SVG. */}
              {/* If you use Heroicons: npm install @heroicons/react */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#232323]"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-[#636363] text-base font-medium mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="w-[450px] h-[51px] p-3 text-[D9D9D9] rounded-lg border border-[#AFAFAF] focus:outline-none focus:ring-2"
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#232323]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                )}
              </button>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <Button
            className="w-1/3"
            type="submit"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}