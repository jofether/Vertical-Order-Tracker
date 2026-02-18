import { getStatusBadgeColor } from '../utils/styles';

const OrderSelector = ({ orders, selectedOrder, onSelectOrder }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {orders.map((order, idx) => (
      <button
        key={idx}
        onClick={() => onSelectOrder(idx)}
        className={`p-6 rounded-xl border-2 transition-all duration-300 ${
          selectedOrder === idx
            ? 'bg-white border-purple-500 shadow-2xl scale-105'
            : 'bg-white/10 border-white/20 hover:border-purple-400 hover:bg-white/20 text-white'
        }`}
      >
        <div className="flex justify-between items-start">
          <div className="text-left">
            <p className={`text-sm font-semibold uppercase tracking-wide ${selectedOrder === idx ? 'text-purple-600' : 'text-purple-300'}`}>
              Order {idx + 1}
            </p>
            <p className={`text-2xl font-bold mt-2 ${selectedOrder === idx ? 'text-gray-900' : 'text-white'}`}>
              {order.id}
            </p>
            <p className={`text-sm mt-2 ${selectedOrder === idx ? 'text-gray-600' : 'text-gray-300'}`}>
              {order.carrier}
            </p>
          </div>
          <span className={`px-4 py-2 rounded-lg text-sm font-bold ${getStatusBadgeColor(order.status)}`}>
            {order.status}
          </span>
        </div>
      </button>
    ))}
  </div>
);

export default OrderSelector;
