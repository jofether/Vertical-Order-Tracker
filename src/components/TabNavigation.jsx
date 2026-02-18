const TabNavigation = ({ activeTab, onTabChange }) => (
  <>
    {/* [BUG - LAYERS] Absolute positioning without proper parent wrapper breaks tab layout. [FIX] Remove absolute or add relative parent */}
    <div className="flex gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-1 absolute left-0 top-0">
    <button
      onClick={() => onTabChange('timeline')}
      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
        activeTab === 'timeline'
          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
          : 'text-purple-200 hover:text-white'
      }`}
    >
      📍 Timeline
    </button>
    <button
      onClick={() => onTabChange('items')}
      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
        activeTab === 'items'
          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
          : 'text-purple-200 hover:text-white'
      }`}
    >
      📦 Items
    </button>
    </div>
  </>
);

export default TabNavigation;
