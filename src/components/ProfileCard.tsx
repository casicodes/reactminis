import pizzaData from "../data/data.js";

function ProfileCard({ restroname }) {
  return (
    <div className="flex flex-col gap-4 w-72 text-left mx-auto bg-slate-100 p-4">
      <h1 className="text-3xl font-mono">{restroname}</h1>
      <ul>
        {pizzaData.map((pizza) => (
          <li key={pizza.name} className="flex flex-col mb-4">
            <span
              className={`${pizza.soldOut ? "text-red-600" : "text-green-600"}`}
            >
              {pizza.soldOut ? "Sold Out" : "Available"}
            </span>
            <span className="font-bold">
              {pizza.name} - {pizza.price}
            </span>{" "}
            <span className="text-gray-500">{pizza.ingredients}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
