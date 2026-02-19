const ReceiptButton = ({ isOpen, onToggle }) => (
  <div className="text-center py-12">
    <button 
      onClick={onToggle}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 text-purple-600 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95"
    >
      {isOpen ? '✕' : '📄'} {isOpen ? 'Hide' : 'Show'} Full Receipt
      <span className="text-lg">→</span>
    </button>
  </div>
);

export default ReceiptButton;
