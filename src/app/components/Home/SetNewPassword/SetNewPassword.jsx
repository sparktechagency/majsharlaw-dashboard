'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
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

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      toast.error('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (newPassword === "newpassword123") {
        toast.success('Password updated successfully! Redirecting to login...');
        router.push('/');
      } else {
        setError('Failed to update password. Please try again.');
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
    <div className="min-h-screen flex items-center justify-center bg-white text-black"> {/* ⬅️ light mode enforced */}
      <div className="px-20 py-40 border-[#FEFEFECC] shadow rounded-2xl mx-auto border flex flex-col items-center justify-center bg-white text-black">
        <div className='mb-8'>
          <SectionTitle heading="Set a new password" subHeading="Create a new password. Ensure it differs from previous ones for security" />
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
                className="w-[450px] h-[51px] p-3 text-black bg-white rounded-lg border border-[#AFAFAF] focus:outline-none focus:ring-2"
                placeholder="**********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#232323] cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {/* your SVG icons unchanged */}
              </button>
            </div>
          </div>

          {/* Repeat the same for confirm password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-[#636363] text-base font-medium mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="w-[450px] h-[51px] p-3 text-black bg-white rounded-lg border border-[#AFAFAF] focus:outline-none focus:ring-2"
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#232323] cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {/* your SVG icons unchanged */}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button className="w-1/3" type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
