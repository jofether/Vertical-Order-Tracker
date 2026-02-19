const TimelineEvent = ({ event, isExpanded, onToggle }) => (
  <div 
    className={`relative flex items-start group transition-all duration-300 cursor-pointer`}
    onClick={onToggle}
  >
    <div className={`absolute left-0 mt-1.5 w-6 h-6 rounded-full border-4 border-slate-900 shadow-lg z-10 transition-all duration-300 
      ${event.active ? 'bg-gradient-to-br from-green-400 to-emerald-500 scale-110 shadow-green-500/50' : 'bg-gray-500 scale-100'} group-hover:scale-125`}>
    </div>

    <div className="pl-8 w-full">
      <div className={`p-4 rounded-lg border transition-all duration-300 ${
        event.active
          ? 'bg-white/15 border-green-400/50 hover:bg-white/20'
          : 'bg-white/8 border-white/20 hover:border-purple-400/50 hover:bg-white/12'
      }`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{event.icon}</span>
            <div>
              <h4 className={`font-bold text-base transition-colors ${event.active ? 'text-gray-600' : 'text-gray-600'}`}>
                {event.status}
              </h4>
              {event.active && (
                <span className="text-xs text-green-300 font-semibold">Active</span>
              )}
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-purple-300 block">{event.time}</span>
            <span className="text-xs text-gray-400">{event.date}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-300 mb-2">{event.desc}</p>
        
        <div className="flex items-center gap-2 text-xs text-purple-300">
          <span>📍</span>
          <span>{event.location}</span>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-sm text-gray-200">{event.details}</p>
            <button className="mt-3 text-green-400 hover:text-green-300 text-xs font-semibold uppercase tracking-wide">
              View Full Details →
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default TimelineEvent;
