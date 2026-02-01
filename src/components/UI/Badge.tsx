interface BadgeProps {
    children: React.ReactNode
    variant?: 'default' | 'outline' | 'acid' | 'coral' | 'success'
    className?: string
}
export default function Badge({
                          children,
                          variant = 'default',
                          className = '',
                      }: BadgeProps) {
    const variants = {
        default: 'bg-void-lighter text-stark border border-void-lighter',
        outline: 'bg-transparent text-stark border border-stark/30',
        acid: 'bg-acid/10 text-acid border border-acid/50',
        coral: 'bg-coral/10 text-coral border border-coral/50',
        success: 'bg-green-500/10 text-green-500 border border-green-500/50',
    }
    return (
        <span
            className={`inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}
        >
      {children}
    </span>
    )
}
