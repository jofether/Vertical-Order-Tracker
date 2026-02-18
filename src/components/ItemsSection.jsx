import ItemCard from './ItemCard';

const ItemsSection = ({ items, amount }) => (
  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
    <h3 className="text-2xl font-bold text-white mb-6">Order Items</h3>
    
    <div className="space-y-4">
      {items.map((item, idx) => (
        <ItemCard key={idx} item={item} />
      ))}
      
      {/* [BUG - TYPO] Invalid Tailwind color class bg-purple-4005 doesn't exist. [FIX] Change to bg-purple-400/20 */}
      <div className="bg-gradient-to-r from-purple-4005/20 to-blue-400/20 border border-purple-400/50 rounded-lg p-4 mt-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-purple-200 text-sm font-semibold">Order Total</p>
            <p className="text-2xl font-bold text-white mt-1">{amount}</p>
          </div>
          <span className="text-4xl">💳</span>
        </div>
      </div>
    </div>
  </div>
);

export default ItemsSection;
