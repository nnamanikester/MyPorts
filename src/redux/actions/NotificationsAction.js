export const setNotificationsStorage = (notifications) => {
  return {
    type: 'SET_NOTIFICATIONS',
    payload: notifications,
  };
};
