import { useState, useEffect } from "react";
import { getOrders } from "../../api/orders";


export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  async function getOrdersData() {
    const response = await getOrders();
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    setOrders(data);
  }

  useEffect(() => {
    try {
      getOrdersData();
    } catch (error) {
      setError(error);
    }
  }, []);

  if (error !== null) {
    return <h5>An error occured while fetching orders!</h5>;
  }

  if (orders.length === 0) {
    return <h5>No orders found!</h5>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Orders</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.created_on}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
