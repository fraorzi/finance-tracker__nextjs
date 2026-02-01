import { Search, Filter, Download, Plus, CheckSquare } from 'lucide-react'
import Button from '@/components/UI/Button'
import Badge from '@/components/UI/Badge'
const transactions = [
    {
        id: 1,
        date: '2023-10-24',
        time: '14:32:01',
        entity: 'AWS_EMEA_SERVICES',
        tag: 'INFRASTRUCTURE',
        memo: 'Monthly computational resources',
        amount: '-$4,240.50',
        type: 'expense',
    },
    {
        id: 2,
        date: '2023-10-23',
        time: '09:15:44',
        entity: 'STRIPE_PAYOUT_X88',
        tag: 'REVENUE',
        memo: 'Settlement for Batch #9921',
        amount: '+$12,850.00',
        type: 'income',
    },
    {
        id: 3,
        date: '2023-10-22',
        time: '11:45:12',
        entity: 'APPLE_STORE_R5',
        tag: 'HARDWARE',
        memo: 'M3 Pro MacBook Unit (x2)',
        amount: '-$5,198.00',
        type: 'expense',
    },
    {
        id: 4,
        date: '2023-10-22',
        time: '18:20:00',
        entity: 'UBER_TRIP_KJ8',
        tag: 'TRAVEL_LOG',
        memo: 'Client Meeting Transit',
        amount: '-$42.80',
        type: 'expense',
    },
    {
        id: 5,
        date: '2023-10-20',
        time: '14:32:01',
        entity: 'GITHUB_COPILOT',
        tag: 'SUBSCRIPTION',
        memo: 'Monthly AI Seat',
        amount: '-$10.00',
        type: 'expense',
    },
    {
        id: 6,
        date: '2023-10-18',
        time: '10:00:00',
        entity: 'WEWORK_ALL_ACCESS',
        tag: 'OFFICE',
        memo: 'Desk space rental',
        amount: '-$299.00',
        type: 'expense',
    },
]
export default function Transactions() {
    return (
        <div className="flex h-full gap-8">
            {/* Filters Sidebar */}
            <div className="w-64 hidden md:flex flex-col gap-8 border-r border-void-lighter pr-6">
                <div>
                    <div className="flex items-center gap-2 text-acid mb-6">
                        <Filter size={16} />
                        <h3 className="font-bold uppercase tracking-widest">Filter_Deck</h3>
                    </div>

                    <div className="bg-void-light border border-void-lighter p-4 mb-8">
                        <div className="flex justify-between text-xs text-stark/50 mb-2">
                            <span>FLOW_MODE</span>
                            <span>IN / OUT</span>
                        </div>
                        <div className="flex h-10 w-full bg-void border border-void-lighter relative">
                            <div className="w-1/2 h-full bg-transparent"></div>
                            <div className="w-1/2 h-full bg-acid flex items-center justify-center text-void font-bold text-xs">
                                ACTIVE
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs text-stark/50 uppercase tracking-widest mb-4">
                            Category_Select
                        </h4>
                        {[
                            'INFRASTRUCTURE',
                            'SUBSCRIPTIONS',
                            'CLIENT_WORK',
                            'TRAVEL_LOGS',
                            'MISC_ASSETS',
                        ].map((cat, i) => (
                            <label
                                key={cat}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <div
                                    className={`w-4 h-4 border flex items-center justify-center ${i < 2 ? 'bg-acid border-acid text-void' : 'border-stark/30 group-hover:border-acid'}`}
                                >
                                    {i < 2 && <CheckSquare size={12} />}
                                </div>
                                <span
                                    className={`text-sm ${i < 2 ? 'text-stark font-bold' : 'text-stark/70'}`}
                                >
                  {cat}
                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-auto">
                    <h4 className="text-xs text-stark/50 uppercase tracking-widest mb-4">
                        Value_Range
                    </h4>
                    <div className="flex gap-2 items-center">
                        <div className="bg-void-light border border-void-lighter p-2 flex-1">
                            <span className="text-[10px] text-stark/30 block">MIN</span>
                            <span className="text-stark font-mono">0</span>
                        </div>
                        <span className="text-stark/30">-</span>
                        <div className="bg-void-light border border-void-lighter p-2 flex-1">
                            <span className="text-[10px] text-stark/30 block">MAX</span>
                            <span className="text-stark font-mono">9999</span>
                        </div>
                    </div>
                </div>

                <Button className="w-full mt-4" icon={Download}>
                    SAVE_VIEW
                </Button>
            </div>

            {/* Main List Area */}
            <div className="flex-1 flex flex-col">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-stark mb-2">
                        FIND_QUERY
                    </h1>
                    <div className="text-xs text-acid text-right mb-1">
                        _CURSOR_ACTIVE
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="text-acid w-6 h-6" />
                            </div>
                            <input
                                type="text"
                                className="w-full bg-void-light border border-void-lighter text-stark text-xl p-4 pl-14 focus:outline-none focus:border-acid transition-colors placeholder-stark/20 font-mono uppercase"
                                placeholder="SEARCH_HASH OR TAG..."
                            />
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <span className="text-xs border border-stark/20 px-2 py-1 text-stark/50">
                  CMD + K
                </span>
                            </div>
                        </div>
                        <Button
                            variant="secondary"
                            className="h-auto px-6 flex-col gap-1 text-xs"
                        >
                            <Download size={16} />
                            EXPORT
                        </Button>
                        <Button
                            variant="primary"
                            className="h-auto px-6 bg-void-light text-stark border-void-lighter hover:bg-acid hover:text-void flex-col gap-1 text-xs"
                        >
                            <Plus size={16} />
                            NEW_ENTRY
                        </Button>
                    </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 text-xs text-stark/50 uppercase tracking-widest border-b border-void-lighter pb-4 mb-4 px-2">
                    <div className="col-span-2">Date__Timestamp</div>
                    <div className="col-span-3">Entity_ID</div>
                    <div className="col-span-2">Class_Tag</div>
                    <div className="col-span-3">Memo_Log</div>
                    <div className="col-span-2 text-right">Value_Unit</div>
                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                    {transactions.map((tx) => (
                        <div
                            key={tx.id}
                            className="grid grid-cols-12 gap-4 items-center p-4 hover:bg-void-light border border-transparent hover:border-void-lighter transition-all group cursor-pointer"
                        >
                            <div className="col-span-2">
                                <div className="text-stark font-mono">{tx.date}</div>
                                <div className="text-xs text-stark/30">{tx.time}</div>
                            </div>
                            <div className="col-span-3 font-bold text-lg text-stark group-hover:text-acid transition-colors">
                                {tx.entity}
                            </div>
                            <div className="col-span-2">
                                <Badge variant={tx.type === 'income' ? 'acid' : 'outline'}>
                                    {tx.tag}
                                </Badge>
                            </div>
                            <div className="col-span-3 text-stark/60 text-sm font-mono truncate">
                                {tx.memo}
                            </div>
                            <div
                                className={`col-span-2 text-right font-bold font-mono text-lg ${tx.type === 'income' ? 'text-acid' : 'text-coral'}`}
                            >
                                {tx.amount}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Status */}
                <div className="mt-auto pt-8 flex justify-between text-xs font-mono text-stark/40 border-t border-void-lighter border-dashed">
                    <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-acid animate-pulse"></div>
              TERMINAL_ACTIVE
            </span>
                        <span>LATENCY: 24MS</span>
                    </div>
                    <div className="flex gap-8">
                        <span>ROWS: 142</span>
                        <span>TOTAL_VOL: $1,240,420</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
