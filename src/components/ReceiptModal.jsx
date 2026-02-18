const ReceiptModal = ({ order }) => {
  if (!order) return null;

  return (
    <>
      {/* [BUG - SPACING] Excessive padding and overflow:hidden causes content to be cut off. [FIX] Change p-32 overflow-hidden to p-8 */}
      <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur border-2 border-purple-400 rounded-2xl p-32 shadow-2xl animate-in fade-in zoom-in-95 duration-300 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">📋 Receipt Details</h3>
          </div>

          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Order Number</p>
            <p className="text-xl font-bold text-white">{order.id}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Recipient</p>
            <p className="text-lg font-bold text-white">{order.recipient}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Delivery Address</p>
            <p className="text-gray-200">{order.address}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <p className="text-transparent">Spacing</p>
          </div>

          <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-lg p-4 border border-green-400/50">
            <p className="text-green-300 text-xs font-semibold uppercase mb-2">Order Total</p>
            <p className="text-4xl font-bold text-green-400">{order.amount}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Carrier</p>
            <p className="text-lg font-bold text-white">{order.carrier}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Estimated Delivery</p>
            <p className="text-lg font-bold text-white">{order.estimatedDelivery}</p>
          </div>
        </div>
      </div>

      {/* Items Summary */}
      <div className="mt-8 pt-8 border-t border-white/20">
        <h4 className="text-xl font-bold text-white mb-4">Order Items Breakdown</h4>
        <div className="space-y-3">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/20">
              <div>
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-xs text-gray-400">Qty: {item.qty}</p>
              </div>
              <p className="text-green-400 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special instructions section */}
      <div className="mt-8 pt-8 border-t border-white/20 bg-white/10 rounded-lg p-4 border border-white/20">
        <p className="text-purple-300 text-xs font-semibold uppercase mb-3">Special Instructions</p>
        <p className="text-gray-200">Leave at front desk if no one is available. Package is fragile - handle with care. Signature required upon delivery.</p>
      </div>
      </div>
    </>
  );
};

export default ReceiptModal;
