'use client';

import { LayoutGrid, PieChart, PiggyBank, Settings, User, Wallet, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    id: 'dashboard',
    icon: Zap,
    label: 'Dash',
  },
  {
    id: 'transactions',
    icon: LayoutGrid,
    label: 'Trans',
  },
  {
    id: 'wallet',
    icon: Wallet,
    label: 'Wallet',
  },
  {
    id: 'analytics',
    icon: PieChart,
    label: 'Stats',
  },
  {
    id: 'assets',
    icon: PiggyBank,
    label: 'Asset',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='border-void-lighter bg-void z-20 flex w-16 flex-col items-center border-r py-6 md:w-20'>
      <div className='mb-8'>
        <div className='bg-acid text-void flex h-10 w-10 items-center justify-center text-xl font-bold'>
          <Zap size={24} fill='currentColor' />
        </div>
      </div>

      <nav className='flex w-full flex-1 flex-col gap-4 px-2'>
        {navItems.map((item) => (
          <Link
            href=''
            key={item.id}
            className={`group relative flex aspect-square w-full items-center justify-center transition-all duration-200 ${pathname === item.id ? 'bg-acid text-void' : 'text-stark/50 hover:text-acid hover:bg-void-light'}`}
          >
            <item.icon size={24} />
            {pathname === item.id && (
              <div className='absolute top-0 right-0 bottom-0 w-1 bg-white' />
            )}
          </Link>
        ))}
      </nav>

      <div className='mt-auto flex w-full flex-col gap-4 px-2'>
        <button className='text-stark/50 hover:text-stark hover:border-void-lighter flex aspect-square w-full items-center justify-center border border-transparent'>
          <Settings size={24} />
        </button>
        <div className='bg-stark/10 flex aspect-square w-full items-center justify-center'>
          <User size={24} className='text-stark' />
        </div>
      </div>
    </aside>
  );
}
