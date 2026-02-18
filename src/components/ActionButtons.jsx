const ActionButtons = () => (
  <div className="space-y-3">
    <button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
      <span>📧</span> Email Updates
    </button>
    <button className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
      <span>📞</span> Contact Support
    </button>
  </div>
);

export default ActionButtons;
