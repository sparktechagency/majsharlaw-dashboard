"use client"

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const currentPathname = usePathname();
  // Handle root path or /admin to show "dashboard", otherwise use the last segment
  const pageName = (currentPathname === '/' || currentPathname === '/admin')
    ? 'dashboard'
    : currentPathname.split('/').filter(Boolean).pop() || 'dashboard';

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-[#E4E4E4] bg-[#FFFFFF] py-4">
      <div className="relative ml-10">
        <section>
          <h1 className="text-3xl font-bold capitalize">
            {pageName}
          </h1>
          <p className='text-[22px] font-base mt-2'>You can see all of the overview of your app from here.</p>
        </section>
      </div>
      <div className="flex mr-6 gap-2">
        <div className="relative cursor-pointer flex items-center">
          <Image src="/assets/bell.png" alt="Notification Icon" width={50} height={50} />
        </div>
        <div className="relative flex items-center gap-2 rounded-full cursor-pointer">
          <Image src="/assets/user.png" alt="User Icon" width={50} height={50} />
          <span className="text-[#000000] text-xl font-medium">Brian F.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;