import React, { useState } from "react";
import { Check, X, Trash2, ChevronDown } from "lucide-react";

function FarAway({ title }) {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, packed: false, quantity };
    setItems((items) => [...items, newItem]);
    setQuantity(1);
    setDescription("");
  }

  function toggleStatus(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="flex flex-col gap-4 text-left bg-white p-4 rounded-sm">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <div>
        <form onSubmit={handleSubmit} className="flex justify-between gap-2">
          <div className="relative">
            <select
              name="qty"
              id="qty"
              className="rounded-md border py-2 pl-3 pr-8 grow appearance-none"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={16} />
            </div>
          </div>

          <input
            type="text"
            placeholder="Add item"
            className="rounded-md border py-2 px-3 grow"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="border py-2 px-3 rounded-full hover:bg-slate-50 grow">
            Add
          </button>
        </form>
      </div>
      {items.length === 0 ? (
        <p className="text-gray-600 text-center font-mono text-sm">
          💼 No items added yet.
        </p>
      ) : (
        ""
      )}
      {items.length > 0 ? (
        <div>
          <ul className="mt-2 divide-y">
            {items.map((item) => (
              <Item
                item={item}
                key={item.id}
                toggleStatus={toggleStatus}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      {items.length > 0 ? (
        <div>
          <button
            className="border w-full py-2 px-3 rounded-full hover:bg-slate-50 grow"
            onClick={() => setItems([])}
          >
            Clear all
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function Item({ item, toggleStatus, handleDelete }) {
  return (
    <li className="flex justify-between items-center py-2 first-of-type:pt-0 font-mono">
      <span
        className={`${
          item.packed ? "line-through text-gray-400" : ""
        } flex justify-between`}
      >
        {item.quantity} x {item.description}
      </span>{" "}
      <span className="flex gap-2">
        <button
          className="border py-2 px-2 rounded-full hover:bg-slate-50"
          onClick={() => toggleStatus(item.id)}
        >
          {item.packed ? <X size={16} /> : <Check size={16} />}
        </button>
        <button
          className="border py-2 px-2 rounded-full hover:bg-slate-50"
          onClick={() => handleDelete(item.id)}
        >
          <Trash2 size={16} />
        </button>
      </span>
    </li>
  );
}

export default FarAway;
