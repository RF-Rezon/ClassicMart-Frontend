import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const History = () => {
  const { webUrl, user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`${webUrl}/api/history/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, [user]);

  return (
    <div className="p-5 my-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-customRed mb-6">Order History</h2>

      {history.length === 0 && (
        <p className="text-gray-600">No order history found.</p>
      )}

      {history.map((order) => (
        <div key={order._id} className="border p-5 rounded-lg mb-5 shadow">
          <p className="font-semibold text-lg text-black">
            Date: {new Date(order.date).toLocaleDateString()}
          </p>

          <div className="mt-3">
            {order.items.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b py-2"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold text-customRed">{item.name}</p>
                  <p className="text-customGray">Price: {item.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
