import {Picker} from '@react-native-community/picker';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {grayColor} from '../variables';
import {Icon} from '../Icon';

const Select = ({data, selected, onChange, disabled, type}) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Picker
        itemStyle={styles.items}
        mode={type}
        enabled={!disabled}
        selectedValue={selected}
        style={styles.picker}
        onValueChange={onChange}>
        {data &&
          data.map(({label, value}) => {
            return <Picker.Item key={`${value}`} label={label} value={value} />;
          })}
      </Picker>
      <Icon
        size={20}
        style={styles.icon}
        name={open ? 'ios-arrow-forward' : 'ios-arrow-down'}
      />
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
  },
  icon: {
    backgroundColor: '#fff',
    right: 30,
  },
});

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.any,
  onChange: PropTypes.func,
};

export {Select};
