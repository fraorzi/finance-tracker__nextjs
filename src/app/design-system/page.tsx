import { Trash2, Plus, ArrowRight, ShoppingCart, Laptop, AlertTriangle } from 'lucide-react'

import Button from '@/components/UI/Button'
import Badge from '@/components/UI/Badge'

export default function DesignSystem() {
    return (
        <div className="max-w-6xl mx-auto pb-20">
            <div className="border border-acid/20 p-8 mb-12 relative overflow-hidden bg-void-light/30">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <div className="text-9xl font-bold text-acid rotate-12">⚒</div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <Badge variant="coral" className="bg-coral text-void px-3 py-1">
                        ANTI-FINTECH REVOLUTION
                    </Badge>
                    <span className="text-acid text-xs">v1.0</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-stark mb-4">
                    ASSET SHEET <span className="text-stark/30">//</span>{' '}
                    <span className="text-acid">DO NOT EDIT</span>
                </h1>
                <div className="border-l-2 border-acid pl-6 mt-8">
                    <p className="text-stark/70 font-mono max-w-2xl uppercase tracking-widest">
                        Core design system parameters. Raw. Unfiltered. Ready for
                        production.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Typography Section */}
                <section>
                    <div className="flex items-center gap-2 text-acid mb-8">
                        <span className="text-2xl font-bold">Tt</span>
                        <h2 className="text-xl font-bold uppercase tracking-widest">
                            01. Typography Scale
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <div className="text-xs text-stark/30 mb-2">
                                DISPLAY // H1 // 48PX-72PX
                            </div>
                            <div className="text-6xl font-bold text-stark">YOU BROKE</div>
                        </div>
                        <div>
                            <div className="text-xs text-stark/30 mb-2">
                                HEADING // H2 // 32PX
                            </div>
                            <div className="text-3xl font-bold text-stark">
                                MONTHLY BURN: HIGH
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-stark/30 mb-2">
                                SUBHEADING // H3 // 24PX
                            </div>

                            <div className="text-2xl font-bold text-stark">
                                {'>'} TOTAL_DEBT_ACCUMULATED
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-stark/30 mb-2">
                                BODY // P // 16PX
                            </div>
                            <p className="text-stark/70 max-w-md">
                                Funds are low. The system is rigged. This text block
                                demonstrates the legibility of Space Grotesk in a paragraph
                                format. Use for transaction details and regretful notes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Controls Section */}
                <section>
                    <div className="flex items-center gap-2 text-acid mb-8">
                        <span className="text-2xl font-bold">⚃</span>
                        <h2 className="text-xl font-bold uppercase tracking-widest">
                            03. Controls
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-4">
                            <Button>PRIMARY ACTION</Button>
                            <Button variant="secondary">
                                SECONDARY <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center">
                            <Button variant="danger" size="icon" icon={Trash2} />
                            <Button variant="icon" size="icon" icon={Plus} />
                            <Button
                                variant="secondary"
                                className="bg-stark text-void font-bold border-stark hover:bg-white w-64 justify-center"
                            >
                                WARNING STATE
                            </Button>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="flex items-center gap-2 text-acid mb-8">
                            <span className="text-2xl font-bold">→</span>
                            <h2 className="text-xl font-bold uppercase tracking-widest">
                                04. Inputs
                            </h2>
                        </div>

                        <div className="space-y-4 max-w-md">
                            <div className="relative">
                <span className="absolute -top-2 left-3 bg-acid text-void text-[10px] font-bold px-1">
                  AMOUNT ($)
                </span>
                                <div className="w-full bg-void-light border border-void-lighter p-4 text-stark/50 font-mono">
                                    0.00
                                </div>
                            </div>

                            <div className="relative">
                                <div className="w-full bg-void-light border border-void-lighter p-4 flex items-center gap-4">
                                    <div className="w-4 h-4 border border-stark/30 rounded-full"></div>
                                    <span className="text-stark/50 font-mono">FIND_ASSET...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section>
                    <div className="flex items-center gap-2 text-acid mb-8">
                        <span className="text-2xl font-bold">🎨</span>
                        <h2 className="text-xl font-bold uppercase tracking-widest">
                            02. Color Palette
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                            <div className="aspect-square bg-acid mb-2 border border-stark/10"></div>
                            <div className="font-bold text-sm text-stark">ACID YELLOW</div>
                            <div className="text-xs text-stark/30">#F9F506</div>
                        </div>
                        <div>
                            <div className="aspect-square bg-stark mb-2 border border-stark/10"></div>
                            <div className="font-bold text-sm text-stark">STARK WHITE</div>
                            <div className="text-xs text-stark/30">#FFFFFF</div>
                        </div>
                        <div>
                            <div className="aspect-square bg-coral mb-2 border border-stark/10"></div>
                            <div className="font-bold text-sm text-stark">ELECTRIC CORAL</div>
                            <div className="text-xs text-stark/30">#FF5E57</div>
                        </div>
                        <div>
                            <div className="aspect-square bg-void mb-2 border border-void-lighter"></div>
                            <div className="font-bold text-sm text-stark">VOID</div>
                            <div className="text-xs text-stark/30">#1A1A0B</div>
                        </div>
                    </div>
                </section>

                {/* Micro Section */}
                <section>
                    <div className="flex items-center gap-2 text-acid mb-8">
                        <span className="text-2xl font-bold">⑆</span>
                        <h2 className="text-xl font-bold uppercase tracking-widest">
                            05. Micro
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div className="flex justify-between max-w-md">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <div className="w-6 h-6 border border-stark/30 flex items-center justify-center"></div>
                                <span className="font-bold text-sm">RECURRING</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <div className="w-10 h-6 border border-stark/30 bg-void-light relative">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-stark/30"></div>
                                </div>
                                <span className="font-bold text-sm">SAFE MODE</span>
                            </label>
                        </div>

                        <div className="flex gap-4">
                            <Badge
                                variant="acid"
                                className="bg-acid text-void px-3 py-1 flex items-center gap-2"
                            >
                                <ShoppingCart size={12} /> GROCERIES
                            </Badge>
                            <Badge className="bg-stark text-void px-3 py-1 flex items-center gap-2">
                                <Laptop size={12} /> TECH
                            </Badge>
                            <Badge
                                variant="coral"
                                className="bg-coral text-white px-3 py-1 flex items-center gap-2"
                            >
                                <AlertTriangle size={12} /> REGRET
                            </Badge>
                        </div>

                        <div className="border border-dashed border-stark/30 p-4 inline-block">
                            <span className="text-xs text-stark/50">#PENDING</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
