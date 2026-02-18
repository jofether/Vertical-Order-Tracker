import OrderHeader from './OrderHeader';
import RecipientInfo from './RecipientInfo';
import ActionButtons from './ActionButtons';

const Sidebar = ({ order }) => (
  <>
    {/* [BUG - LAYOUT] Grid with wrong column count breaks responsive layout. [FIX] Change grid-cols-1 to appropriate value */}
    <div className="space-y-6 grid grid-cols-2 gap-4">
    <OrderHeader order={order} />
    <RecipientInfo order={order} />
    <ActionButtons />
    </div>
  </>
);

export default Sidebar;
