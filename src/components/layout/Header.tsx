'use client';

import { Terminal, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='border-void-lighter bg-void/80 z-10 flex h-16 items-center justify-between border-b px-6 backdrop-blur-sm'>
      <div className='flex items-center gap-4'>
        <Terminal className='text-acid' />
        <span className='text-lg font-bold tracking-widest'>
          TERMINAL.FINANCE{' '}
          <span className='text-stark/30 ml-2 text-sm font-normal'>v2.4.0_RC1</span>
        </span>
      </div>

      <div className='flex items-center gap-6 text-sm font-bold tracking-wider'>
        <div className='hidden items-center gap-6 md:flex'>
          <span className={pathname === 'dashboard' ? 'text-acid' : 'text-stark/50'}>
            {' '}
            // DASHBOARD
          </span>
          <span className={pathname === 'transactions' ? 'text-acid' : 'text-stark/50'}>
            {' '}
            // TRANSACTIONS
          </span>
          <span className={pathname === 'settings' ? 'text-acid' : 'text-stark/50'}>
            {' '}
            // SETTINGS
          </span>
        </div>
        <div className='border-void-lighter flex items-center gap-3 border-l pl-6'>
          <div className='hidden text-right sm:block'>
            <div className='text-stark/50 text-[10px]'>OPERATOR</div>
            <div className='text-stark'>ALEX_K.</div>
          </div>
          <div className='bg-stark text-void flex h-8 w-8 items-center justify-center font-bold'>
            <User size={16} />
          </div>
        </div>
      </div>
    </header>
  );
}
