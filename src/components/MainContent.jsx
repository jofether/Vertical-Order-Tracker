import TabNavigation from './TabNavigation';
import TimelineSection from './TimelineSection';
import ItemsSection from './ItemsSection';

const MainContent = ({ events, items, amount, activeTab, onTabChange, expandedEvent, onToggleExpanded }) => (
  <>
    {/* [BUG - LAYOUT] Flex-col-reverse breaks content order completely. [FIX] Change flex-col-reverse to flex-col */}
    <div className="lg:col-span-2 space-y-6 flex flex-col-reverse">
    <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />

    {activeTab === 'timeline' && (
      <TimelineSection
        events={events}
        expandedEvent={expandedEvent}
        onToggleExpanded={onToggleExpanded}
      />
    )}

    {activeTab === 'items' && (
      <ItemsSection items={items} amount={amount} />
    )}
    </div>
  </>
);

export default MainContent;
