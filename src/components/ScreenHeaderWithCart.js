import React from 'react';
import * as UI from './common';
import Header from './Header';

const ScreenHeaderWithCart = ({navigation, title, icon}) => {
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
      headerRight={
        <>
          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.navigate('Cart')}>
            <UI.Icon
              name="shopping-bag"
              size={22}
              type="Feather"
              color="#fff"
            />
            <UI.Spacer />
          </UI.Clickable>

          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.navigate('Search')}>
            <UI.Spacer />
            <UI.Icon name="ios-search" color="#fff" />
          </UI.Clickable>
        </>
      }
    />
  );
};

export default ScreenHeaderWithCart;
