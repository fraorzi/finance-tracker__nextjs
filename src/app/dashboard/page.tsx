'use client'

import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'

import { ArrowUpRight, Flame, Percent, Plus, RefreshCw, FileText } from 'lucide-react'
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts'

const data = [
    {
        name: 'Mon',
        value: 4000,
    },
    {
        name: 'Tue',
        value: 3000,
    },
    {
        name: 'Wed',
        value: 5000,
    },
    {
        name: 'Thu',
        value: 2780,
    },
    {
        name: 'Fri',
        value: 1890,
    },
    {
        name: 'Sat',
        value: 2390,
    },
    {
        name: 'Sun',
        value: 3490,
    },
    {
        name: 'Mon2',
        value: 4200,
    },
    {
        name: 'Tue2',
        value: 3800,
    },
    {
        name: 'Wed2',
        value: 5500,
    },
    {
        name: 'Thu2',
        value: 4800,
    },
    {
        name: 'Fri2',
        value: 6000,
    },
]
const cashFlowData = [
    {
        name: 'W1',
        value: 2000,
    },
    {
        name: 'W2',
        value: 4500,
    },
    {
        name: 'W3',
        value: 1500,
    },
    {
        name: 'W4',
        value: 6000,
    },
    {
        name: 'W5',
        value: 3800,
    },
    {
        name: 'W6',
        value: 7500,
    },
    {
        name: 'W7',
        value: 2500,
    },
]

export default function Dashboard() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Main Left Column */}
            <div className="flex-1 flex flex-col gap-6">
                {/* Net Worth Section */}
                <div className="relative">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-acid font-bold tracking-widest text-sm uppercase">
                            Total Net Worth
                        </h2>
                        <span className="bg-acid text-void px-2 py-0.5 text-xs font-bold">
              LIVE FEED
            </span>
                    </div>

                    <div className="flex items-baseline gap-1 mb-8 relative z-10">
            <span className="text-6xl md:text-8xl font-bold text-stark tracking-tighter">
              $42,069
            </span>
                        <span className="text-2xl md:text-4xl text-acid font-bold">
              .00
            </span>
                    </div>

                    <div className="h-48 w-full absolute top-0 right-0 opacity-50 pointer-events-none">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F9F506" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#F9F506" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#F9F506"
                                    strokeWidth={3}
                                    fill="url(#colorValue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="w-full border-b border-dashed border-void-lighter mb-8"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-acid/20">
                        <div className="flex justify-between items-start mb-4">
              <span className="text-stark/60 text-xs uppercase">
                Income (Mo)
              </span>
                            <ArrowUpRight className="text-acid w-4 h-4"/>
                        </div>
                        <div className="text-2xl font-bold mb-2">$8,240</div>
                        <div className="w-full bg-void-lighter h-1 mt-2">
                            <div className="bg-acid h-full w-[70%]"></div>
                        </div>
                    </Card>

                    <Card className="border-coral/20">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-stark/60 text-xs uppercase">Burn Rate</span>
                            <Flame className="text-coral w-4 h-4"/>
                        </div>
                        <div className="text-2xl font-bold mb-2">$3,100</div>
                        <div className="w-full bg-void-lighter h-1 mt-2">
                            <div className="bg-coral h-full w-[40%]"></div>
                        </div>
                    </Card>

                    <Card className="border-acid/20">
                        <div className="flex justify-between items-start mb-4">
              <span className="text-stark/60 text-xs uppercase">
                Savings Rate
              </span>
                            <Percent className="text-acid w-4 h-4"/>
                        </div>
                        <div className="text-2xl font-bold mb-2">62.4%</div>
                        <div className="w-full bg-void-lighter h-1 mt-2">
                            <div className="bg-acid h-full w-[62%]"></div>
                        </div>
                    </Card>
                </div>

                {/* Cash Flow Chart */}
                <Card
                    className="flex-1 min-h-[300px] flex flex-col"
                    title="Cash Flow Velocity"
                >
                    <div className="absolute top-4 right-4 flex gap-1">
                        <button className="bg-void text-acid text-xs px-2 py-1 font-bold border border-acid">
                            1W
                        </button>
                        <button className="bg-stark text-void text-xs px-2 py-1 font-bold">
                            1M
                        </button>
                        <button className="bg-void text-stark text-xs px-2 py-1 font-bold border border-void-lighter">
                            1Y
                        </button>
                    </div>

                    <div className="flex-1 mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={cashFlowData}>
                                <Bar dataKey="value" fill="#2A2A1A" stroke="#4A4A3A"/>
                                {/* Highlight specific bars manually or via data props in real app */}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Custom styled bars overlay simulation for the specific look */}
                    <div
                        className="absolute inset-0 top-16 px-4 pb-4 flex items-end justify-between pointer-events-none gap-2">
                        {cashFlowData.map((d, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-void-lighter/20 relative group h-full flex items-end"
                            >
                                <div
                                    className={`w-full transition-all duration-500 ${i === 5 ? 'bg-acid' : i === 3 ? 'bg-void-lighter' : 'bg-void-lighter/50'}`}
                                    style={{
                                        height: `${(d.value / 8000) * 100}%`,
                                    }}
                                >
                                    {i === 5 && (
                                        <div
                                            className="absolute -top-6 left-1/2 -translate-x-1/2 text-stark text-xs font-bold">
                                            $7.5k
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Action Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="secondary" icon={Plus} fullWidth>
                        Deposit
                    </Button>
                    <div className="flex">
                        <Button
                            variant="secondary"
                            className="flex-1 border-r-0"
                            icon={ArrowUpRight}
                        >
                            Trans
                        </Button>
                        <Button variant="primary" size="icon" icon={Plus}/>
                    </div>
                    <Button variant="secondary" icon={RefreshCw} fullWidth>
                        Invest
                    </Button>
                    <Button variant="secondary" icon={FileText} fullWidth>
                        Export
                    </Button>
                </div>
            </div>

            {/* Right Sidebar - Recent Transactions */}
            <div className="w-full lg:w-80 flex flex-col gap-0 border-l border-void-lighter pl-0 lg:pl-6 pt-6 lg:pt-0">
                <div className="bg-acid w-full p-8 flex flex-col items-center justify-center text-void mb-8">
                    <div className="border-2 border-void rounded-full p-2 mb-2">
                        <FileText size={24}/>
                    </div>
                    <h3 className="font-bold text-lg uppercase tracking-widest text-center">
                        Recent
                        <br/>
                        Transactions
                    </h3>
                    <p className="text-xs font-mono mt-2 opacity-80">
                        TERMINAL ID: 884-X
                    </p>
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-void-lighter flex-1"></div>
                    <span className="text-xs text-acid uppercase tracking-widest">
            Today
          </span>
                    <div className="h-px bg-void-lighter flex-1"></div>
                </div>

                <div className="flex flex-col gap-6 mb-8">
                    <TransactionItem
                        title="UBER TRIP"
                        time="14:20 PM"
                        amount="-$24.50"
                        category="Transport"
                    />
                    <TransactionItem
                        title="WHOLE FOODS"
                        time="11:05 AM"
                        amount="-$104.20"
                        category="Groceries"
                    />
                    <TransactionItem
                        title="FREELANCE PAYOUT"
                        time="09:00 AM"
                        amount="+$1,200.00"
                        category="Income"
                        positive
                    />
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-void-lighter flex-1"></div>
                    <span className="text-xs text-acid uppercase tracking-widest">
            Yesterday
          </span>
                    <div className="h-px bg-void-lighter flex-1"></div>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                    <TransactionItem
                        title="SPOTIFY PREM"
                        time="Auto-pay"
                        amount="-$12.99"
                        category="Sub"
                    />
                    <TransactionItem
                        title="COFFEE HOUSE"
                        time="08:15 AM"
                        amount="-$6.50"
                        category="Dining"
                    />
                    <TransactionItem
                        title="APPLE STORE"
                        time="02:30 PM"
                        amount="-$2,199.00"
                        category="Tech"
                    />
                </div>

                <div className="mt-auto pt-8 border-t border-void-lighter border-dashed">
                    <div className="flex justify-between text-stark/50 text-xs mb-2">
                        <span>ITEM COUNT</span>
                        <span>6</span>
                    </div>
                    <div className="flex justify-between text-stark/50 text-xs mb-4">
                        <span>TAX</span>
                        <span>$0.00</span>
                    </div>
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-stark font-bold">TOTAL SPENT</span>
                        <span className="text-acid font-bold text-xl">-$2,347.19</span>
                    </div>
                    <Button
                        variant="secondary"
                        fullWidth
                        className="text-xs py-2 h-auto text-acid border-acid hover:bg-acid hover:text-void"
                    >
                        DOWNLOAD PDF
                    </Button>
                </div>
            </div>
        </div>
    )
}

function TransactionItem({
                             title,
                             time,
                             amount,
                             category,
                             positive = false,
                         }: {
    title: string
    time: string
    amount: string
    category: string
    positive?: boolean
}) {
    return (
        <div className="flex justify-between items-start group cursor-pointer">
            <div>
                <h4 className="font-bold text-stark text-sm group-hover:text-acid transition-colors">
                    {title}
                </h4>
                <span className="text-xs text-stark/40">{time}</span>
            </div>
            <div className="text-right">
                <div
                    className={`font-bold text-sm ${positive ? 'text-green-500' : 'text-stark'}`}
                >
                    {amount}
                </div>
                <span className="text-xs text-stark/40">{category}</span>
            </div>
        </div>
    )
}
