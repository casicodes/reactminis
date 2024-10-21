import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const initialItems = [
  // {
  //   icon: "💵",
  //   category: "paycheck",
  //   expense: false,
  //   amount: 1500,
  //   time: "Mon 14 Oct",
  // },
  // {
  //   icon: "🍎",
  //   category: "grocery",
  //   expense: true,
  //   amount: 81,
  //   time: "Sat 12 Oct",
  // },
  // {
  //   icon: "🚕",
  //   category: "transport",
  //   expense: true,
  //   amount: 15,
  //   time: "Fri 11 Oct",
  // },
  // {
  //   icon: "🍕",
  //   category: "food",
  //   expense: true,
  //   amount: 25,
  //   time: "Sat 12 Oct",
  // },
];

const initialCategory = [
  { icon: "🍎", category: "grocery", expense: true },
  { icon: "🍕", category: "eating out", expense: true },
  { icon: "🚕", category: "transport", expense: true },
  { icon: "🏠", category: "rent", expense: true },
  { icon: "💵", category: "paycheck", expense: false },
];

function RecordTransaction({ title }) {
  const [transactions, setTransactions] = useState(initialItems);

  // Group transactions by time (date)
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.time]) {
      acc[transaction.time] = [];
    }
    acc[transaction.time].push(transaction);
    return acc;
  }, {});

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  const sortedDates = Object.keys(groupedTransactions).sort((a, b) => {
    const dateA = new Date(a.split(" ").slice(1).reverse().join(" "));
    const dateB = new Date(b.split(" ").slice(1).reverse().join(" "));
    return dateB - dateA;
  });

  return (
    <div className="flex flex-col gap-4 text-left bg-white p-4 rounded-md">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <div>
        {sortedDates.map((date) => (
          <div key={date} className="mb-4">
            <span className="text-gray-500 mb-2 block">{date}</span>
            {groupedTransactions[date].map((transaction) => (
              <TransactionItem
                key={transaction.category + transaction.amount}
                transaction={transaction}
              />
            ))}
          </div>
        ))}
      </div>
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

function TransactionItem({ transaction }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <span className="text-xl">{transaction.icon}</span>
        <span className="flex flex-col grow">
          <span className="capitalize font-mono">{transaction.category}</span>
        </span>
        <span
          className={`${
            transaction.expense ? "text-red-500" : "text-green-600"
          } text-lg font-mono`}
        >
          {transaction.expense
            ? `-${transaction.amount}`
            : `+${transaction.amount}`}
        </span>
      </div>
    </div>
  );
}

function AddTransaction({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(initialCategory[0].category);

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !date) return;

    const selectedCategory = initialCategory.find(
      (item) => item.category === category
    );

    const newTransaction = {
      id: Date.now(),
      icon: selectedCategory.icon,
      category,
      amount: parseFloat(amount),
      expense: selectedCategory.expense,
      time: formatSelectedDate(date),
    };

    addTransaction(newTransaction);
    setAmount("");
  }

  return (
    <div>
      <form
        action=""
        className="flex justify-between gap-2"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <select
            name="category"
            id="category"
            className="rounded-md border py-2 pl-3 pr-8 grow appearance-none capitalize"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {initialCategory.map((item) => (
              <option key={item.category} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={16} />
          </div>
        </div>
        <input
          type="number"
          placeholder="Amount"
          className="rounded-md border py-2 px-2 w-[100px]"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          className="rounded-md border py-2 px-3 w-[150px]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="border py-2 px-2 rounded-full hover:bg-slate-50 grow">
          Add
        </button>
      </form>
    </div>
  );
}

function formatSelectedDate(selectedDate) {
  const date = new Date(selectedDate);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek} ${dayOfMonth} ${month}`;
}

export default RecordTransaction;
