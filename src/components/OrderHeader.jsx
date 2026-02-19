import { getStatusColorBg, calculateProgress } from '../utils/styles';

const OrderHeader = ({ order }) => {
  const { percentage, activeCount, total } = calculateProgress(order.events);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden text-white">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-purple-100 text-sm font-semibold uppercase tracking-wide mb-2">Tracking Order</p>
            <h2 className="text-3xl font-bold">{order.id}</h2>
          </div>
          <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase shadow-lg ${getStatusColorBg(order.statusColor)}`}>
            {order.status}
          </span>
        </div>
        
        <div className="space-y-3 -m-12">
          <div className="flex justify-between text-sm text-purple-100">
            <span className="font-semibold">Progress</span>
            <span className="font-bold text-lg">{percentage}%</span>
          </div>
          <div className="w-full bg-purple-400/30 rounded-full h-3 overflow-hidden border border-purple-400">
            <div 
              className="bg-gradient-to-r from-green-400 to-emerald-300 h-full rounded-full transition-all duration-700 ease-out shadow-lg"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-purple-200">{activeCount} of {total} milestones completed</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0 bg-white/10 backdrop-blur">
        <div className="text-center py-4 border-r border-white/20">
          <p className="text-purple-100 text-xs font-semibold uppercase">Est. Delivery</p>
          <p className="text-lg font-bold mt-2">{order.estimatedDelivery}</p>
        </div>
        <div className="text-center py-4 border-r border-white/20">
          <p className="text-purple-100 text-xs font-semibold uppercase">Carrier</p>
          <p className="text-sm font-bold mt-2">{order.carrier.split(' ')[0]}</p>
        </div>
        <div className="text-center py-4">
          <p className="text-purple-100 text-xs font-semibold uppercase">Weight</p>
          <p className="text-lg font-bold mt-2">{order.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
