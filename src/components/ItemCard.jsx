const ItemCard = ({ item }) => (
  <div className="bg-white/10 rounded-lg p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
    <div className="flex justify-between items-start">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">
          📦
        </div>
        <div>
          <p className="text-white font-semibold">{item.name}</p>
          <p className="text-sm text-gray-400 mt-1">Qty: {item.qty}</p>
        </div>
      </div>
      <p className="text-lg font-bold text-green-400">{item.price}</p>
    </div>
  </div>
);

export default ItemCard;
