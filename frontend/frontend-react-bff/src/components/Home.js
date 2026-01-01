import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/bff/home").then(res => setData(res.data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Restaurants</h2>
      {data.restaurants.map(r => (
        <div key={r._id}>{r.name}</div>
      ))}

      <h2>Cart</h2>
      <pre>{JSON.stringify(data.cart, null, 2)}</pre>

      <h2>Active Orders</h2>
      {data.activeOrders.map(o => (
        <div key={o._id}>{o.status}</div>
      ))}
    </div>
  );
}