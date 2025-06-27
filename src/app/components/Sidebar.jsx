'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
 Image as ImageIcon,
  Users2,
  Settings,
  LayoutDashboard,
  LibraryBig,
  Wrench,
  Store,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TbLayout2 } from "react-icons/tb";
// import dreckks from '../../public/dreckks-logo.png';
// import barss from '../../public/icon/bars.png';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users2 },
  { name: 'Bookings', href: '/admin/bookings', icon: LibraryBig },
  { name: 'Services', href: '/admin/services', icon: Wrench },
  { name: 'Providers', href: '/admin/manage-providers', icon: Store },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-[#6DA40A] text-[#D2D2D2] shadow-lg pr-10`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Logo & Close Button */}
          <div className="flex items-center justify-center py-4">
            <Image className='' src="/assets/logo.png" alt="logo" width={158} height={81} />
          </div>

          {/* Navigation Items */}
          <nav className="mt-4 space-y-6 flex-grow overflow-y-auto">
            {navItems.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className={`flex items-center justify-start pl-4 pr-20 mx-auto py-2 transition-all rounded ${isActive
                    ? 'bg-white text-[#6DA40A]'
                    : 'text-[#D2D2D2]'
                    }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium text-[16px]">{name}</span>
                </Link>
              );
            })}

            {/* Logout Button */}
            <div className="mt-64 border-[#D6D6D6] pt-6 pl-3">
              <Button className="flex gap-2 items-center justify-start bg-white text-[#FF0000] w-11/12">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.7001 18.5583H12.5918C8.89176 18.5583 7.10843 17.1 6.80009 13.8333C6.76676 13.4917 7.01676 13.1833 7.36676 13.15C7.70009 13.1166 8.01676 13.375 8.05009 13.7167C8.29176 16.3333 9.52509 17.3083 12.6001 17.3083H12.7084C16.1001 17.3083 17.3001 16.1083 17.3001 12.7167V7.28332C17.3001 3.89165 16.1001 2.69165 12.7084 2.69165H12.6001C9.50843 2.69165 8.27509 3.68332 8.05009 6.34998C8.00843 6.69165 7.71676 6.94998 7.36676 6.91665C7.01676 6.89165 6.76676 6.58332 6.79176 6.24165C7.07509 2.92498 8.86676 1.44165 12.5918 1.44165H12.7001C16.7918 1.44165 18.5418 3.19165 18.5418 7.28332V12.7167C18.5418 16.8083 16.7918 18.5583 12.7001 18.5583Z" fill="#292D32" />
                  <path d="M3.0166 9.875H12.5C12.5301 9.87502 12.5613 9.88746 12.5869 9.91309C12.6125 9.93872 12.625 9.96987 12.625 10C12.625 10.0301 12.6125 10.0613 12.5869 10.0869C12.5613 10.1125 12.5301 10.125 12.5 10.125H3.0166C2.98645 10.125 2.95533 10.1126 2.92969 10.0869C2.90404 10.0613 2.8916 10.0301 2.8916 10C2.8916 9.96985 2.90404 9.93873 2.92969 9.91309C2.95533 9.88744 2.98645 9.875 3.0166 9.875Z" fill="#292D32" stroke="#727272" />
                  <path d="M4.87549 7.08545C4.91114 7.08556 4.94194 7.09917 4.96338 7.12061C4.98473 7.14212 4.99756 7.17281 4.99756 7.2085C4.99753 7.2442 4.98478 7.27489 4.96338 7.29639L2.61279 9.646L2.25928 10.0005L2.61279 10.354L4.96338 12.7036C4.98479 12.7251 4.99751 12.7558 4.99756 12.7915C4.99756 12.8272 4.98471 12.8579 4.96338 12.8794L4.95752 12.8862L4.95166 12.8921C4.94839 12.8956 4.94108 12.9022 4.92725 12.9077C4.91276 12.9135 4.89424 12.9164 4.87549 12.9165C4.85781 12.9165 4.84194 12.9131 4.82861 12.9077C4.81577 12.9025 4.80129 12.8941 4.78662 12.8794L1.99561 10.0884C1.97417 10.0669 1.96056 10.0361 1.96045 10.0005C1.96045 9.96464 1.97408 9.93315 1.99561 9.91162L4.78662 7.12061C4.80815 7.09908 4.83964 7.08545 4.87549 7.08545Z" fill="#292D32" stroke="#727272" />
                </svg>

                Logout
              </Button>
            </div>


          </nav>


        </div>
      </aside>
    </>
  );
};

export default Sidebar;
