import { AlertTriangle, ArrowRight, Laptop, Plus, ShoppingCart, Trash2 } from 'lucide-react';

import Badge from '@/components/UI/Badge';
import Button from '@/components/UI/Button';

export default function DesignSystem() {
  return (
    <div className='mx-auto max-w-6xl pb-20'>
      <div className='border-acid/20 bg-void-light/30 relative mb-12 overflow-hidden border p-8'>
        <div className='absolute top-0 right-0 p-4 opacity-10'>
          <div className='text-acid rotate-12 text-9xl font-bold'>⚒</div>
        </div>

        <div className='mb-6 flex items-center gap-4'>
          <Badge variant='coral' className='bg-coral text-void px-3 py-1'>
            ANTI-FINTECH REVOLUTION
          </Badge>
          <span className='text-acid text-xs'>v1.0</span>
        </div>

        <h1 className='text-stark mb-4 text-5xl font-bold md:text-7xl'>
          ASSET SHEET <span className='text-stark/30'>//</span>{' '}
          <span className='text-acid'>DO NOT EDIT</span>
        </h1>
        <div className='border-acid mt-8 border-l-2 pl-6'>
          <p className='text-stark/70 max-w-2xl font-mono tracking-widest uppercase'>
            Core design system parameters. Raw. Unfiltered. Ready for production.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
        {/* Typography Section */}
        <section>
          <div className='text-acid mb-8 flex items-center gap-2'>
            <span className='text-2xl font-bold'>Tt</span>
            <h2 className='text-xl font-bold tracking-widest uppercase'>01. Typography Scale</h2>
          </div>

          <div className='space-y-8'>
            <div>
              <div className='text-stark/30 mb-2 text-xs'>DISPLAY // H1 // 48PX-72PX</div>
              <div className='text-stark text-6xl font-bold'>YOU BROKE</div>
            </div>
            <div>
              <div className='text-stark/30 mb-2 text-xs'>HEADING // H2 // 32PX</div>
              <div className='text-stark text-3xl font-bold'>MONTHLY BURN: HIGH</div>
            </div>

            <div>
              <div className='text-stark/30 mb-2 text-xs'>SUBHEADING // H3 // 24PX</div>

              <div className='text-stark text-2xl font-bold'>{'>'} TOTAL_DEBT_ACCUMULATED</div>
            </div>
            <div>
              <div className='text-stark/30 mb-2 text-xs'>BODY // P // 16PX</div>
              <p className='text-stark/70 max-w-md'>
                Funds are low. The system is rigged. This text block demonstrates the legibility of
                Space Grotesk in a paragraph format. Use for transaction details and regretful
                notes.
              </p>
            </div>
          </div>
        </section>

        {/* Controls Section */}
        <section>
          <div className='text-acid mb-8 flex items-center gap-2'>
            <span className='text-2xl font-bold'>⚃</span>
            <h2 className='text-xl font-bold tracking-widest uppercase'>03. Controls</h2>
          </div>

          <div className='space-y-8'>
            <div className='flex flex-wrap gap-4'>
              <Button>PRIMARY ACTION</Button>
              <Button variant='secondary'>
                SECONDARY <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </div>

            <div className='flex flex-wrap items-center gap-4'>
              <Button variant='danger' size='icon' icon={Trash2} />
              <Button variant='icon' size='icon' icon={Plus} />
              <Button
                variant='secondary'
                className='bg-stark text-void border-stark w-64 justify-center font-bold hover:bg-white'
              >
                WARNING STATE
              </Button>
            </div>
          </div>

          <div className='mt-12'>
            <div className='text-acid mb-8 flex items-center gap-2'>
              <span className='text-2xl font-bold'>→</span>
              <h2 className='text-xl font-bold tracking-widest uppercase'>04. Inputs</h2>
            </div>

            <div className='max-w-md space-y-4'>
              <div className='relative'>
                <span className='bg-acid text-void absolute -top-2 left-3 px-1 text-[10px] font-bold'>
                  AMOUNT ($)
                </span>
                <div className='bg-void-light border-void-lighter text-stark/50 w-full border p-4 font-mono'>
                  0.00
                </div>
              </div>

              <div className='relative'>
                <div className='bg-void-light border-void-lighter flex w-full items-center gap-4 border p-4'>
                  <div className='border-stark/30 h-4 w-4 rounded-full border'></div>
                  <span className='text-stark/50 font-mono'>FIND_ASSET...</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section>
          <div className='text-acid mb-8 flex items-center gap-2'>
            <span className='text-2xl font-bold'>🎨</span>
            <h2 className='text-xl font-bold tracking-widest uppercase'>02. Color Palette</h2>
          </div>

          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
            <div>
              <div className='bg-acid border-stark/10 mb-2 aspect-square border'></div>
              <div className='text-stark text-sm font-bold'>ACID YELLOW</div>
              <div className='text-stark/30 text-xs'>#F9F506</div>
            </div>
            <div>
              <div className='bg-stark border-stark/10 mb-2 aspect-square border'></div>
              <div className='text-stark text-sm font-bold'>STARK WHITE</div>
              <div className='text-stark/30 text-xs'>#FFFFFF</div>
            </div>
            <div>
              <div className='bg-coral border-stark/10 mb-2 aspect-square border'></div>
              <div className='text-stark text-sm font-bold'>ELECTRIC CORAL</div>
              <div className='text-stark/30 text-xs'>#FF5E57</div>
            </div>
            <div>
              <div className='bg-void border-void-lighter mb-2 aspect-square border'></div>
              <div className='text-stark text-sm font-bold'>VOID</div>
              <div className='text-stark/30 text-xs'>#1A1A0B</div>
            </div>
          </div>
        </section>

        {/* Micro Section */}
        <section>
          <div className='text-acid mb-8 flex items-center gap-2'>
            <span className='text-2xl font-bold'>⑆</span>
            <h2 className='text-xl font-bold tracking-widest uppercase'>05. Micro</h2>
          </div>

          <div className='space-y-8'>
            <div className='flex max-w-md justify-between'>
              <label className='flex cursor-pointer items-center gap-3'>
                <div className='border-stark/30 flex h-6 w-6 items-center justify-center border'></div>
                <span className='text-sm font-bold'>RECURRING</span>
              </label>

              <label className='flex cursor-pointer items-center gap-3'>
                <div className='border-stark/30 bg-void-light relative h-6 w-10 border'>
                  <div className='bg-stark/30 absolute top-1 left-1 h-4 w-4'></div>
                </div>
                <span className='text-sm font-bold'>SAFE MODE</span>
              </label>
            </div>

            <div className='flex gap-4'>
              <Badge variant='acid' className='bg-acid text-void flex items-center gap-2 px-3 py-1'>
                <ShoppingCart size={12} /> GROCERIES
              </Badge>
              <Badge className='bg-stark text-void flex items-center gap-2 px-3 py-1'>
                <Laptop size={12} /> TECH
              </Badge>
              <Badge
                variant='coral'
                className='bg-coral flex items-center gap-2 px-3 py-1 text-white'
              >
                <AlertTriangle size={12} /> REGRET
              </Badge>
            </div>

            <div className='border-stark/30 inline-block border border-dashed p-4'>
              <span className='text-stark/50 text-xs'>#PENDING</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
