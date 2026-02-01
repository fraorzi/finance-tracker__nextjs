'use client'

import {Terminal, User} from "lucide-react";

import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="h-16 border-b border-void-lighter flex items-center justify-between px-6 bg-void/80 backdrop-blur-sm z-10">
            <div className="flex items-center gap-4">
                <Terminal className="text-acid" />
                <span className="font-bold text-lg tracking-widest">
              TERMINAL.FINANCE{' '}
                    <span className="text-stark/30 text-sm ml-2 font-normal">
                v2.4.0_RC1
              </span>
            </span>
            </div>

            <div className="flex items-center gap-6 text-sm font-bold tracking-wider">
                <div className="hidden md:flex items-center gap-6">
              <span
                  className={
                      pathname === 'dashboard' ? 'text-acid' : 'text-stark/50'
                  }
              >
                {' '}
                  // DASHBOARD
              </span>
                    <span
                        className={
                            pathname === 'transactions' ? 'text-acid' : 'text-stark/50'
                        }
                    >
                {' '}
                        // TRANSACTIONS
              </span>
                    <span
                        className={
                            pathname === 'settings' ? 'text-acid' : 'text-stark/50'
                        }
                    >
                {' '}
                        // SETTINGS
              </span>
                </div>
                <div className="flex items-center gap-3 border-l border-void-lighter pl-6">
                    <div className="text-right hidden sm:block">
                        <div className="text-[10px] text-stark/50">OPERATOR</div>
                        <div className="text-stark">ALEX_K.</div>
                    </div>
                    <div className="w-8 h-8 bg-stark text-void flex items-center justify-center font-bold">
                        <User size={16} />
                    </div>
                </div>
            </div>
        </header>
    )
}
