interface CardProps {
    children: React.ReactNode
    className?: string
    title?: string
    action?: React.ReactNode
    noPadding?: boolean
}
export default function Card({
                         children,
                         className = '',
                         title,
                         action,
                         noPadding = false,
                     }: CardProps) {
    return (
        <div
            className={`bg-void-light border border-void-lighter relative group ${className}`}
        >
            {/* Corner accents for tech feel */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stark/20"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-stark/20"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stark/20"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stark/20"></div>

            {(title || action) && (
                <div className="flex items-center justify-between p-4 border-b border-void-lighter">
                    {title && (
                        <h3 className="text-stark font-bold uppercase tracking-widest text-sm">
                            {title}
                        </h3>
                    )}
                    {action && <div>{action}</div>}
                </div>
            )}

            <div className={noPadding ? '' : 'p-4'}>{children}</div>
        </div>
    )
}
