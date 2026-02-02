export interface TransactionCardProps {
  title: string;
  amount: number;
  type: 'income' | 'expense';
}

export default function TransactionCard({ title, amount, type }: TransactionCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p className={type === 'income' ? 'text-green-500' : 'text-red-500'}>{amount}</p>
    </div>
  );
}
