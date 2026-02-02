interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
}
export default function Card({
  children,
  className = '',
  title,
  action,
  noPadding = false,
}: CardProps) {
  return (
    <div className={`bg-void-light border-void-lighter group relative border ${className}`}>
      {/* Corner accents for tech feel */}
      <div className='border-stark/20 absolute top-0 left-0 h-2 w-2 border-t border-l'></div>
      <div className='border-stark/20 absolute top-0 right-0 h-2 w-2 border-t border-r'></div>
      <div className='border-stark/20 absolute bottom-0 left-0 h-2 w-2 border-b border-l'></div>
      <div className='border-stark/20 absolute right-0 bottom-0 h-2 w-2 border-r border-b'></div>

      {(title || action) && (
        <div className='border-void-lighter flex items-center justify-between border-b p-4'>
          {title && (
            <h3 className='text-stark text-sm font-bold tracking-widest uppercase'>{title}</h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}

      <div className={noPadding ? '' : 'p-4'}>{children}</div>
    </div>
  );
}
