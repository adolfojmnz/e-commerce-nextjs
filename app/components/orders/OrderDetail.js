import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getOrder } from "../../api/orders";
import { getOrderItems } from "../../api/orders";
import OrderItemList from "./OrderItemList";


export default function OrderDetail() {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [error, setError] = useState(null);

  async function getOrderData() {
    if (router.query.orderid === undefined) {
      return;
    }
    const response = await getOrder(router.query.orderid);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    setOrder(data);
  }

  async function getOrderItemsData() {
    if (router.query.orderid === undefined) {
      return;
    }
    const response = await getOrderItems(router.query.orderid);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    setOrderItems(data);
  }

  useEffect(() => {
    try {
      getOrderData();
      getOrderItemsData();
    } catch (error) {
      setError(error);
    }
  }, [router]);

  if (error !== null) {
    return <h5>An error occured while fetching order!</h5>;
  }

  if (order === null) {
    return <h5>Loading...</h5>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Order Detail</h3>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.created_on}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <h5>Ordered Items</h5>
        <OrderItemList orderItems={orderItems} />
      </div>
    </>
  );
}