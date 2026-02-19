import OrderHeader from './OrderHeader';
import RecipientInfo from './RecipientInfo';
import ActionButtons from './ActionButtons';

const Sidebar = ({ order }) => (
  <>
    <div className="space-y-6 grid grid-cols-2 gap-4">
    <OrderHeader order={order} />
    <RecipientInfo order={order} />
    <ActionButtons />
    </div>
  </>
);

export default Sidebar;
