const RecipientInfo = ({ order }) => (
  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-white">
    <div className="space-y-4">
      <div>
        <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Recipient</p>
        <p className="text-lg font-bold">{order.recipient}</p>
      </div>
      <div>
        <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Delivery Address</p>
        <p className="text-sm text-gray-200">{order.address}</p>
      </div>
      <div className="pt-4 border-t border-white/20">
        <p className="text-purple-300 text-xs font-semibold uppercase mb-2">Order Total</p>
        <p className="text-2xl font-bold text-green-400">{order.amount}</p>
      </div>
    </div>
  </div>
);

export default RecipientInfo;
