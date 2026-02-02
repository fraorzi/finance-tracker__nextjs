'use client';

import { ArrowUpRight, FileText, Flame, Percent, Plus, RefreshCw } from 'lucide-react';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer } from 'recharts';

import Button from '@/components/UI/Button';
import Card from '@/components/UI/Card';

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
];
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
];

export default function Dashboard() {
  return (
    <div className='flex h-full flex-col gap-6 lg:flex-row'>
      {/* Main Left Column */}
      <div className='flex flex-1 flex-col gap-6'>
        {/* Net Worth Section */}
        <div className='relative'>
          <div className='mb-2 flex items-start justify-between'>
            <h2 className='text-acid text-sm font-bold tracking-widest uppercase'>
              Total Net Worth
            </h2>
            <span className='bg-acid text-void px-2 py-0.5 text-xs font-bold'>LIVE FEED</span>
          </div>

          <div className='relative z-10 mb-8 flex items-baseline gap-1'>
            <span className='text-stark text-6xl font-bold tracking-tighter md:text-8xl'>
              $42,069
            </span>
            <span className='text-acid text-2xl font-bold md:text-4xl'>.00</span>
          </div>

          <div className='pointer-events-none absolute top-0 right-0 h-48 w-full opacity-50'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#F9F506' stopOpacity={0.3} />
                    <stop offset='95%' stopColor='#F9F506' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type='monotone'
                  dataKey='value'
                  stroke='#F9F506'
                  strokeWidth={3}
                  fill='url(#colorValue)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className='border-void-lighter mb-8 w-full border-b border-dashed'></div>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <Card className='border-acid/20'>
            <div className='mb-4 flex items-start justify-between'>
              <span className='text-stark/60 text-xs uppercase'>Income (Mo)</span>
              <ArrowUpRight className='text-acid h-4 w-4' />
            </div>
            <div className='mb-2 text-2xl font-bold'>$8,240</div>
            <div className='bg-void-lighter mt-2 h-1 w-full'>
              <div className='bg-acid h-full w-[70%]'></div>
            </div>
          </Card>

          <Card className='border-coral/20'>
            <div className='mb-4 flex items-start justify-between'>
              <span className='text-stark/60 text-xs uppercase'>Burn Rate</span>
              <Flame className='text-coral h-4 w-4' />
            </div>
            <div className='mb-2 text-2xl font-bold'>$3,100</div>
            <div className='bg-void-lighter mt-2 h-1 w-full'>
              <div className='bg-coral h-full w-[40%]'></div>
            </div>
          </Card>

          <Card className='border-acid/20'>
            <div className='mb-4 flex items-start justify-between'>
              <span className='text-stark/60 text-xs uppercase'>Savings Rate</span>
              <Percent className='text-acid h-4 w-4' />
            </div>
            <div className='mb-2 text-2xl font-bold'>62.4%</div>
            <div className='bg-void-lighter mt-2 h-1 w-full'>
              <div className='bg-acid h-full w-[62%]'></div>
            </div>
          </Card>
        </div>

        {/* Cash Flow Chart */}
        <Card className='flex min-h-[300px] flex-1 flex-col' title='Cash Flow Velocity'>
          <div className='absolute top-4 right-4 flex gap-1'>
            <button className='bg-void text-acid border-acid border px-2 py-1 text-xs font-bold'>
              1W
            </button>
            <button className='bg-stark text-void px-2 py-1 text-xs font-bold'>1M</button>
            <button className='bg-void text-stark border-void-lighter border px-2 py-1 text-xs font-bold'>
              1Y
            </button>
          </div>

          <div className='mt-4 flex-1'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={cashFlowData}>
                <Bar dataKey='value' fill='#2A2A1A' stroke='#4A4A3A' />
                {/* Highlight specific bars manually or via data props in real app */}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Custom styled bars overlay simulation for the specific look */}
          <div className='pointer-events-none absolute inset-0 top-16 flex items-end justify-between gap-2 px-4 pb-4'>
            {cashFlowData.map((d, i) => (
              <div
                key={i}
                className='bg-void-lighter/20 group relative flex h-full flex-1 items-end'
              >
                <div
                  className={`w-full transition-all duration-500 ${i === 5 ? 'bg-acid' : i === 3 ? 'bg-void-lighter' : 'bg-void-lighter/50'}`}
                  style={{
                    height: `${(d.value / 8000) * 100}%`,
                  }}
                >
                  {i === 5 && (
                    <div className='text-stark absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold'>
                      $7.5k
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Bar */}
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          <Button variant='secondary' icon={Plus} fullWidth>
            Deposit
          </Button>
          <div className='flex'>
            <Button variant='secondary' className='flex-1 border-r-0' icon={ArrowUpRight}>
              Trans
            </Button>
            <Button variant='primary' size='icon' icon={Plus} />
          </div>
          <Button variant='secondary' icon={RefreshCw} fullWidth>
            Invest
          </Button>
          <Button variant='secondary' icon={FileText} fullWidth>
            Export
          </Button>
        </div>
      </div>

      {/* Right Sidebar - Recent Transactions */}
      <div className='border-void-lighter flex w-full flex-col gap-0 border-l pt-6 pl-0 lg:w-80 lg:pt-0 lg:pl-6'>
        <div className='bg-acid text-void mb-8 flex w-full flex-col items-center justify-center p-8'>
          <div className='border-void mb-2 rounded-full border-2 p-2'>
            <FileText size={24} />
          </div>
          <h3 className='text-center text-lg font-bold tracking-widest uppercase'>
            Recent
            <br />
            Transactions
          </h3>
          <p className='mt-2 font-mono text-xs opacity-80'>TERMINAL ID: 884-X</p>
        </div>

        <div className='mb-4 flex items-center gap-4'>
          <div className='bg-void-lighter h-px flex-1'></div>
          <span className='text-acid text-xs tracking-widest uppercase'>Today</span>
          <div className='bg-void-lighter h-px flex-1'></div>
        </div>

        <div className='mb-8 flex flex-col gap-6'>
          <TransactionItem
            title='UBER TRIP'
            time='14:20 PM'
            amount='-$24.50'
            category='Transport'
          />
          <TransactionItem
            title='WHOLE FOODS'
            time='11:05 AM'
            amount='-$104.20'
            category='Groceries'
          />
          <TransactionItem
            title='FREELANCE PAYOUT'
            time='09:00 AM'
            amount='+$1,200.00'
            category='Income'
            positive
          />
        </div>

        <div className='mb-4 flex items-center gap-4'>
          <div className='bg-void-lighter h-px flex-1'></div>
          <span className='text-acid text-xs tracking-widest uppercase'>Yesterday</span>
          <div className='bg-void-lighter h-px flex-1'></div>
        </div>

        <div className='flex flex-1 flex-col gap-6'>
          <TransactionItem title='SPOTIFY PREM' time='Auto-pay' amount='-$12.99' category='Sub' />
          <TransactionItem title='COFFEE HOUSE' time='08:15 AM' amount='-$6.50' category='Dining' />
          <TransactionItem
            title='APPLE STORE'
            time='02:30 PM'
            amount='-$2,199.00'
            category='Tech'
          />
        </div>

        <div className='border-void-lighter mt-auto border-t border-dashed pt-8'>
          <div className='text-stark/50 mb-2 flex justify-between text-xs'>
            <span>ITEM COUNT</span>
            <span>6</span>
          </div>
          <div className='text-stark/50 mb-4 flex justify-between text-xs'>
            <span>TAX</span>
            <span>$0.00</span>
          </div>
          <div className='mb-6 flex items-end justify-between'>
            <span className='text-stark font-bold'>TOTAL SPENT</span>
            <span className='text-acid text-xl font-bold'>-$2,347.19</span>
          </div>
          <Button
            variant='secondary'
            fullWidth
            className='text-acid border-acid hover:bg-acid hover:text-void h-auto py-2 text-xs'
          >
            DOWNLOAD PDF
          </Button>
        </div>
      </div>
    </div>
  );
}

function TransactionItem({
  title,
  time,
  amount,
  category,
  positive = false,
}: {
  title: string;
  time: string;
  amount: string;
  category: string;
  positive?: boolean;
}) {
  return (
    <div className='group flex cursor-pointer items-start justify-between'>
      <div>
        <h4 className='text-stark group-hover:text-acid text-sm font-bold transition-colors'>
          {title}
        </h4>
        <span className='text-stark/40 text-xs'>{time}</span>
      </div>
      <div className='text-right'>
        <div className={`text-sm font-bold ${positive ? 'text-green-500' : 'text-stark'}`}>
          {amount}
        </div>
        <span className='text-stark/40 text-xs'>{category}</span>
      </div>
    </div>
  );
}
