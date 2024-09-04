import { useState } from "react";

const initialItems = [
  { id: 1, description: "Sleeping bags", packed: true, quantity: 2 },
  { id: 2, description: "Cookware", packed: false, quantity: 1 },
  { id: 3, description: "Firewood", packed: false, quantity: 5 },
];
function FarAway({ title }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    const newItem = { id: Date.now(), description, packed: false, quantity };
    console.log(newItem);
    setQuantity(() => 1);
    setDescription(() => "");
    e.preventDefault();
  }

  return (
    <div className="flex flex-col gap-4 text-left">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <div className="flex justify-between gap-2">
        <form action="" onSubmit={handleSubmit}>
          <select
            name=""
            id=""
            className="border py-2 px-3 grow"
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
            className="border py-2 px-3 grow"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="border py-2 px-3 rounded-full hover:bg-slate-50 grow">
            Add
          </button>
        </form>
      </div>
      <div>
        <ul>
          {initialItems.map((item, id) => (
            <Item item={item} key={id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
function Item({ item }) {
  return (
    <li className={item.packed ? "line-through" : ""}>
      {item.description} ({item.quantity})
    </li>
  );
}
export default FarAway;
