import React, { useState } from 'react';

function App() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const events = [
    { 
      time: "09:00 AM", 
      status: "Delivered", 
      desc: "Package delivered to front desk.", 
      active: true,
      date: "Jan 12, 2026",
      location: "New York, NY",
      icon: "✓",
      details: "Successfully signed by reception at main entrance"
    },
    { 
      time: "07:30 AM", 
      status: "Out for Delivery", 
      desc: "Driver is on the way to your location.", 
      active: true,
      date: "Jan 12, 2026",
      location: "Manhattan, NY",
      icon: "🚚",
      details: "Estimated delivery in 90 minutes"
    },
    { 
      time: "05:00 AM", 
      status: "Arrived at Facility", 
      desc: "Package sorted at distribution center.", 
      active: true,
      date: "Jan 12, 2026",
      location: "New York Distribution Hub",
      icon: "📦",
      details: "Package processed and ready for final delivery"
    },
    { 
      time: "Yesterday", 
      status: "In Transit", 
      desc: "Departed from shipping hub.", 
      active: false,
      date: "Jan 11, 2026",
      location: "Philadelphia, PA",
      icon: "→",
      details: "Left regional sorting facility"
    },
    { 
      time: "Oct 24", 
      status: "Order Placed", 
      desc: "Seller has processed your order.", 
      active: false,
      date: "Oct 24, 2025",
      location: "Online",
      icon: "📋",
      details: "Order confirmed and forwarded to warehouse"
    },
  ];

  const completedPercentage = Math.round((events.filter(e => e.active).length / events.length) * 100);
  const activeCount = events.filter(e => e.active).length;

  const getStatusColor = (active) => {
    return active ? 'from-indigo-600 to-indigo-500' : 'from-gray-300 to-gray-200';
  };

  const toggleExpanded = (idx) => {
    setExpandedEvent(expandedEvent === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-gray-50 py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-8 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-indigo-100 text-sm font-semibold uppercase tracking-wide">Tracking Order</p>
                <h1 className="text-4xl font-bold mt-2">#920491</h1>
              </div>
              <span className="bg-green-400 text-green-900 text-xs px-4 py-2 rounded-full font-bold uppercase shadow-lg">On Time</span>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm text-indigo-100">
                <span>Delivery Progress</span>
                <span className="font-semibold">{completedPercentage}%</span>
              </div>
              <div className="w-full bg-indigo-400 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-300 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${completedPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-indigo-200 mt-2">{activeCount} of {events.length} steps completed</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gray-50 to-indigo-50">
            <div className="text-center">
              <p className="text-gray-500 text-xs font-semibold uppercase">Est. Delivery</p>
              <p className="text-lg font-bold text-gray-900 mt-1">Today</p>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <p className="text-gray-500 text-xs font-semibold uppercase">Carrier</p>
              <p className="text-lg font-bold text-gray-900 mt-1">FastShip</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs font-semibold uppercase">Package</p>
              <p className="text-lg font-bold text-gray-900 mt-1">2.5 lbs</p>
            </div>
          </div>
        </div>

        {/* Timeline Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">📍</span>
            Tracking Timeline
          </h2>

          {/* TIMELINE CONTAINER */}
          <div className="relative">
            {/* Vertical Line Background */}
            <div className="absolute left-2.5 top-2 h-full w-0.5 bg-gradient-to-b from-indigo-300 to-gray-200"></div>

            <div className="space-y-6">
              {events.map((event, idx) => (
                <div 
                  key={idx} 
                  className={`relative flex items-start group transition-all duration-300 cursor-pointer hover:pl-2`}
                  onClick={() => toggleExpanded(idx)}
                >
                  
                  {/* DOT INDICATOR */}
                  <div className={`absolute left-0 mt-1.5 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 transition-all duration-300 
                    ${event.active ? 'bg-indigo-600 scale-110' : 'bg-gray-300'} group-hover:scale-125`}>
                    <div className={`w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold transition-opacity
                      ${event.active ? 'opacity-100' : 'opacity-0'}`}>
                      {event.icon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="pl-8 w-full">
                    <div className="bg-gradient-to-r from-gray-50 to-transparent p-4 rounded-lg border border-gray-100 group-hover:border-indigo-200 group-hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className={`font-bold text-base transition-colors ${event.active ? 'text-indigo-600' : 'text-gray-500'}`}>
                            {event.status}
                          </h3>
                          {event.active && (
                            <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded">Active</span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-gray-500 block">{event.time}</span>
                          <span className="text-xs text-gray-400">{event.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{event.desc}</p>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>

                      {/* Expandable Details */}
                      {expandedEvent === idx && (
                        <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-sm text-gray-700 italic">{event.details}</p>
                          <button className="mt-3 text-indigo-600 hover:text-indigo-700 text-xs font-semibold uppercase tracking-wide">
                            View Full Details →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action Cards */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white hover:bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4 transition-all duration-300 group">
            <p className="text-indigo-600 font-bold group-hover:text-indigo-700">📧 Email Updates</p>
            <p className="text-xs text-gray-500 mt-1">Get notifications</p>
          </button>
          <button className="bg-white hover:bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4 transition-all duration-300 group">
            <p className="text-indigo-600 font-bold group-hover:text-indigo-700">📞 Contact Support</p>
            <p className="text-xs text-gray-500 mt-1">Need help?</p>
          </button>
        </div>

        {/* Details Button */}
        <div className="text-center pb-8">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {showDetails ? '✕ Hide' : '📄 View'} Detailed Receipt
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Detailed Receipt Modal */}
        {showDetails && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-indigo-100 animate-in fade-in zoom-in-95 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-sm font-semibold uppercase">Recipient</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">John Doe</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold uppercase">Order Amount</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">$129.99</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase">Delivery Address</p>
                <p className="text-gray-700 mt-1">123 Main Street, New York, NY 10001, USA</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-xs font-semibold uppercase">Special Instructions</p>
                <p className="text-gray-700 mt-2">Leave at front desk. No signature required.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
