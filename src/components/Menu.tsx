import pizzaData from "../data/data.js";

function Menu({ title }) {
  return (
    <div className="flex flex-col gap-4 text-left">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <div className="flex flex-col gap-4 text-left border rounded-lg p-4">
        <ul>
          {pizzaData.map((pizza) => (
            <li key={pizza.name} className="flex flex-col mb-4">
              <span
                className={`${
                  pizza.soldOut ? "text-red-600" : "text-green-600"
                }  text-sm`}
              >
                {pizza.soldOut ? "Sold Out" : "Available"}
              </span>
              <span className="font-mono font-medium">
                {pizza.name} - {pizza.price}
              </span>{" "}
              <span className="text-gray-500">{pizza.ingredients}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
