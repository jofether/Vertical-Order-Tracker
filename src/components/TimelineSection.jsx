import TimelineEvent from './TimelineEvent';

const TimelineSection = ({ events, expandedEvent, onToggleExpanded }) => (
  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
    <h3 className="text-2xl font-bold text-white mb-8">Tracking Timeline</h3>

    <div className="relative">
      <div className="absolute left-2.5 top-2 h-full w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-transparent"></div>

      <div className="space-y-6">
        {events.map((event, idx) => (
          <TimelineEvent
            key={idx}
            event={event}
            isExpanded={expandedEvent === idx}
            onToggle={() => onToggleExpanded(idx)}
          />
        ))}
      </div>
    </div>
  </div>
);

export default TimelineSection;
