'use client'

import {LayoutGrid, PiggyBank, Settings, User, Wallet, Zap, PieChart} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";

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
]

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-16 md:w-20 border-r border-void-lighter flex flex-col items-center py-6 bg-void z-20">
            <div className="mb-8">
                <div className="w-10 h-10 bg-acid flex items-center justify-center text-void font-bold text-xl">
                    <Zap size={24} fill="currentColor" />
                </div>
            </div>

            <nav className="flex-1 flex flex-col gap-4 w-full px-2">
                {navItems.map((item) => (
                    <Link
                        href=''
                        key={item.id}
                        className={`w-full aspect-square flex items-center justify-center transition-all duration-200 group relative ${pathname === item.id ? 'bg-acid text-void' : 'text-stark/50 hover:text-acid hover:bg-void-light'}`}
                    >
                        <item.icon size={24} />
                        {pathname === item.id && (
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white" />
                        )}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4 w-full px-2">
                <button className="w-full aspect-square flex items-center justify-center text-stark/50 hover:text-stark border border-transparent hover:border-void-lighter">
                    <Settings size={24} />
                </button>
                <div className="w-full aspect-square flex items-center justify-center bg-stark/10">
                    <User size={24} className="text-stark" />
                </div>
            </div>
        </aside>
    )
}