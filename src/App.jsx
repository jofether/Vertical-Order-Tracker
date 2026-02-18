import React, { useState } from 'react';
import { orders } from './data/orders';
import BackgroundElements from './components/BackgroundElements';
import PageHeader from './components/PageHeader';
import OrderSelector from './components/OrderSelector';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ReceiptButton from './components/ReceiptButton';
import ReceiptModal from './components/ReceiptModal';

function App() {
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [activeTab, setActiveTab] = useState('timeline');
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const currentOrder = orders[selectedOrder];

  const handleToggleExpanded = (idx) => {
    setExpandedEvent(expandedEvent === idx ? null : idx);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 font-sans">
      <BackgroundElements />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <PageHeader />

        <OrderSelector 
          orders={orders}
          selectedOrder={selectedOrder}
          onSelectOrder={setSelectedOrder}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Sidebar order={currentOrder} />

          <MainContent
            events={currentOrder.events}
            items={currentOrder.items}
            amount={currentOrder.amount}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            expandedEvent={expandedEvent}
            onToggleExpanded={handleToggleExpanded}
          />
        </div>

        <ReceiptButton 
          isOpen={showDetails}
          onToggle={() => setShowDetails(!showDetails)}
        />

        {showDetails && <ReceiptModal order={currentOrder} />}
      </div>
    </div>
  );
}

export default App;
