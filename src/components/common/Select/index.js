import {Picker} from '@react-native-community/picker';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {grayColor} from '../variables';

const Select = ({data, selected, onChange, disabled, type, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Picker
        mode={type}
        enabled={!disabled}
        selectedValue={selected}
        itemStyle={styles.items}
        style={styles.picker}
        onValueChange={onChange}>
        {data &&
          data.map(({label, value}) => {
            return (
              <Picker.Item
                key={`${value + label}`}
                label={label}
                value={value}
              />
            );
          })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: grayColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  items: {
    fontFamily: 'SFPD-light',
    fontSize: 30,
  },
});

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.any,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export {Select};
