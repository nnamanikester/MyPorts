export const setVendorProfile = (profile) => {
  return {
    type: 'SET_VENDOR_PROFILE',
    payload: profile,
  };
};

export const setVendor = (vendor) => {
  return {
    type: 'SET_VENDOR',
    payload: vendor,
  };
};
