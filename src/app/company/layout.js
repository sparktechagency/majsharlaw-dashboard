'use client';

import { useState } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './company.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleBellClick = () => {
    setShowNotifications(true);
  };

  const handleGoBack = () => {
    setShowNotifications(false);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-[285px]">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex flex-col w-full">
            {/* Topbar */}
            <div className="sticky top-0 z-50 w-full bg-white shadow">
              <Topbar />
            </div>

            {/* Content */}
            <div className="flex-1">
              {showNotifications ? (
                <div className='p-6'>
                </div>
              ) : (
                <div>
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
