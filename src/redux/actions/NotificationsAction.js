export const setNotificationsStorage = (notifications) => {
  return {
    type: 'SET_NOTIFICATIONS',
    payload: notifications,
  };
};

export const clearNotificationsStorage = () => {
  console.log('Clear Notifications');
  return {
    type: 'CLEAR_NOTIFICATIONS',
  };
};
