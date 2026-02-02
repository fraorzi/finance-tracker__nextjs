import { CheckSquare, Download, Filter, Plus, Search } from 'lucide-react';

import Badge from '@/components/UI/Badge';
import Button from '@/components/UI/Button';
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
];
export default function Transactions() {
  return (
    <div className='flex h-full gap-8'>
      {/* Filters Sidebar */}
      <div className='border-void-lighter hidden w-64 flex-col gap-8 border-r pr-6 md:flex'>
        <div>
          <div className='text-acid mb-6 flex items-center gap-2'>
            <Filter size={16} />
            <h3 className='font-bold tracking-widest uppercase'>Filter_Deck</h3>
          </div>

          <div className='bg-void-light border-void-lighter mb-8 border p-4'>
            <div className='text-stark/50 mb-2 flex justify-between text-xs'>
              <span>FLOW_MODE</span>
              <span>IN / OUT</span>
            </div>
            <div className='bg-void border-void-lighter relative flex h-10 w-full border'>
              <div className='h-full w-1/2 bg-transparent'></div>
              <div className='bg-acid text-void flex h-full w-1/2 items-center justify-center text-xs font-bold'>
                ACTIVE
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-stark/50 mb-4 text-xs tracking-widest uppercase'>
              Category_Select
            </h4>
            {['INFRASTRUCTURE', 'SUBSCRIPTIONS', 'CLIENT_WORK', 'TRAVEL_LOGS', 'MISC_ASSETS'].map(
              (cat, i) => (
                <label key={cat} className='group flex cursor-pointer items-center gap-3'>
                  <div
                    className={`flex h-4 w-4 items-center justify-center border ${i < 2 ? 'bg-acid border-acid text-void' : 'border-stark/30 group-hover:border-acid'}`}
                  >
                    {i < 2 && <CheckSquare size={12} />}
                  </div>
                  <span className={`text-sm ${i < 2 ? 'text-stark font-bold' : 'text-stark/70'}`}>
                    {cat}
                  </span>
                </label>
              ),
            )}
          </div>
        </div>

        <div className='mt-auto'>
          <h4 className='text-stark/50 mb-4 text-xs tracking-widest uppercase'>Value_Range</h4>
          <div className='flex items-center gap-2'>
            <div className='bg-void-light border-void-lighter flex-1 border p-2'>
              <span className='text-stark/30 block text-[10px]'>MIN</span>
              <span className='text-stark font-mono'>0</span>
            </div>
            <span className='text-stark/30'>-</span>
            <div className='bg-void-light border-void-lighter flex-1 border p-2'>
              <span className='text-stark/30 block text-[10px]'>MAX</span>
              <span className='text-stark font-mono'>9999</span>
            </div>
          </div>
        </div>

        <Button className='mt-4 w-full' icon={Download}>
          SAVE_VIEW
        </Button>
      </div>

      {/* Main List Area */}
      <div className='flex flex-1 flex-col'>
        <div className='mb-8'>
          <h1 className='text-stark mb-2 text-4xl font-bold md:text-5xl'>FIND_QUERY</h1>
          <div className='text-acid mb-1 text-right text-xs'>_CURSOR_ACTIVE</div>

          <div className='flex gap-4'>
            <div className='group relative flex-1'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                <Search className='text-acid h-6 w-6' />
              </div>
              <input
                type='text'
                className='bg-void-light border-void-lighter text-stark focus:border-acid placeholder-stark/20 w-full border p-4 pl-14 font-mono text-xl uppercase transition-colors focus:outline-none'
                placeholder='SEARCH_HASH OR TAG...'
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-4'>
                <span className='border-stark/20 text-stark/50 border px-2 py-1 text-xs'>
                  CMD + K
                </span>
              </div>
            </div>
            <Button variant='secondary' className='h-auto flex-col gap-1 px-6 text-xs'>
              <Download size={16} />
              EXPORT
            </Button>
            <Button
              variant='primary'
              className='bg-void-light text-stark border-void-lighter hover:bg-acid hover:text-void h-auto flex-col gap-1 px-6 text-xs'
            >
              <Plus size={16} />
              NEW_ENTRY
            </Button>
          </div>
        </div>

        {/* Table Header */}
        <div className='text-stark/50 border-void-lighter mb-4 grid grid-cols-12 gap-4 border-b px-2 pb-4 text-xs tracking-widest uppercase'>
          <div className='col-span-2'>Date__Timestamp</div>
          <div className='col-span-3'>Entity_ID</div>
          <div className='col-span-2'>Class_Tag</div>
          <div className='col-span-3'>Memo_Log</div>
          <div className='col-span-2 text-right'>Value_Unit</div>
        </div>

        {/* Table Rows */}
        <div className='space-y-2'>
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className='hover:bg-void-light hover:border-void-lighter group grid cursor-pointer grid-cols-12 items-center gap-4 border border-transparent p-4 transition-all'
            >
              <div className='col-span-2'>
                <div className='text-stark font-mono'>{tx.date}</div>
                <div className='text-stark/30 text-xs'>{tx.time}</div>
              </div>
              <div className='text-stark group-hover:text-acid col-span-3 text-lg font-bold transition-colors'>
                {tx.entity}
              </div>
              <div className='col-span-2'>
                <Badge variant={tx.type === 'income' ? 'acid' : 'outline'}>{tx.tag}</Badge>
              </div>
              <div className='text-stark/60 col-span-3 truncate font-mono text-sm'>{tx.memo}</div>
              <div
                className={`col-span-2 text-right font-mono text-lg font-bold ${tx.type === 'income' ? 'text-acid' : 'text-coral'}`}
              >
                {tx.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Status */}
        <div className='text-stark/40 border-void-lighter mt-auto flex justify-between border-t border-dashed pt-8 font-mono text-xs'>
          <div className='flex gap-8'>
            <span className='flex items-center gap-2'>
              <div className='bg-acid h-2 w-2 animate-pulse rounded-full'></div>
              TERMINAL_ACTIVE
            </span>
            <span>LATENCY: 24MS</span>
          </div>
          <div className='flex gap-8'>
            <span>ROWS: 142</span>
            <span>TOTAL_VOL: $1,240,420</span>
          </div>
        </div>
      </div>
    </div>
  );
}
