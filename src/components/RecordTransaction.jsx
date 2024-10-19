const initialItems = [
  {
    icon: "💵",
    category: "paycheck",
    expense: false,
    amount: 1500,
    time: "Mon 14 Oct",
  },
  {
    icon: "🍎",
    category: "grocery",
    expense: true,
    amount: 81,
    time: "Sat 12 Oct",
  },
  {
    icon: "🚕",
    category: "transport",
    expense: true,
    amount: 15,
    time: "Fri 11 Oct",
  },
];
function RecordTransaction({ title }) {
  const transactions = initialItems;
  return (
    <div className="flex flex-col gap-4 text-left bg-white p-4 rounded-md">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <div>
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TransactionItem({ transaction }) {
  return (
    <li className="flex flex-col gap-2 mb-4">
      <span className="text-gray-500">{transaction.time}</span>
      <div className="flex flex-row items-center gap-1">
        <span className="text-2xl">{transaction.icon}</span>
        <span className="flex flex-col grow">
          <span className="capitalize font-bold">{transaction.category}</span>
        </span>
        <span
          className={`${
            transaction.expense ? "text-red-500" : "text-black"
          } text-lg`}
        >
          {transaction.expense
            ? `-${transaction.amount}`
            : `+${transaction.amount}`}
        </span>
      </div>
    </li>
  );
}
export default RecordTransaction;
