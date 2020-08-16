import React from 'react';
import * as UI from './common';
import Header from './Header';

const ScreenHeaderWithoutRightIcon = ({navigation, title, icon}) => {
  let nav = () => navigation.openDrawer();
  let iconName = 'md-menu';

  switch (icon) {
    case 'back':
      nav = () => navigation.goBack();
      iconName = 'ios-arrow-back';
      break;
    default:
      nav = () => navigation.openDrawer();
      iconName = 'md-menu';
      break;
  }

  return (
    <Header
      isCart
      title={title}
      headerLeft={
        <UI.Clickable style={{flexDirection: 'row'}} onClick={nav}>
          <UI.Icon name={iconName} color="#fff" />
          <UI.Spacer medium />
          <UI.Spacer />
        </UI.Clickable>
      }
    />
  );
};

export default ScreenHeaderWithoutRightIcon;
