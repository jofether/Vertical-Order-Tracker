export const getStatusBadgeColor = (status) => {
  switch(status) {
    case 'On Time':
      return 'bg-green-100 text-green-800';
    case 'In Transit':
      return 'bg-blue-100 text-blue-800';
    case 'Delayed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusColorBg = (statusColor) => {
  switch(statusColor) {
    case 'green':
      return 'bg-green-400 text-green-900';
    case 'blue':
      return 'bg-blue-400 text-blue-900';
    default:
      return 'bg-gray-400 text-gray-900';
  }
};

export const calculateProgress = (events) => {
  const activeCount = events.filter(e => e.active).length;
  const percentage = Math.round((activeCount / events.length) * 100);
  return { percentage, activeCount, total: events.length };
};
