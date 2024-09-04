import { useState } from "react";

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

  return (
    <div className="flex flex-col gap-4 text-left">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <div>
        <form onSubmit={handleSubmit} className="flex justify-between gap-2">
          <select
            name="qty"
            id="qty"
            className="rounded-md border py-2 px-3 grow"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
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
        <p className="text-gray-600 text-center">💼 No items added yet.</p>
      ) : (
        ""
      )}

      <div>
        <ul className="mt-2 divide-y">
          {items.map((item) => (
            <Item item={item} key={item.id} toggleStatus={toggleStatus} />
          ))}
        </ul>
      </div>
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

function Item({ item, toggleStatus }) {
  return (
    <li className="flex justify-between items-center py-2 first-of-type:pt-0">
      <span
        className={`${
          item.packed ? "line-through text-gray-400" : ""
        } flex justify-between`}
      >
        {item.quantity} x {item.description}
      </span>{" "}
      <button
        className="border py-2 px-2 rounded-md hover:bg-slate-50"
        onClick={() => toggleStatus(item.id)}
      >
        {item.packed ? "❌" : "✅"}
      </button>
    </li>
  );
}

export default FarAway;
