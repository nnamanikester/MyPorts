import { Network } from '../../utils';

export const checkNetworkStatus = () => {
  return async (dispatch) => {
    const isConnected = await Network.isNetworkAvailable();
    console.log(isConnected);
    return dispatch({
      type: 'NETWORK_STATUS',
      payload: isConnected,
    });
  };
};
