import React from 'react';
import * as UI from '../../../../components/common';
import {StyleSheet} from 'react-native';
import {inactiveColor} from '../../../../components/common/variables';

const StepThree = ({
  show,
  onContinue,
  specifications,
  onAddSpec,
  onRemoveItem,
}) => {
  if (!show) return null;

  const [spec, setSpec] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleAddSpec = () => {
    if (!spec || !value) return;

    onAddSpec(spec, value);
    setSpec('');
    setValue('');
  };

  return (
    <>
      <UI.Text h3>Add Product Specifications (Optional)</UI.Text>
      <UI.Text color="" note>
        Follow the below step to add your product's specifications.
      </UI.Text>

      <UI.Spacer medium />

      <UI.Row>
        <UI.Column size="4">
          <UI.Text heading>Specification</UI.Text>
        </UI.Column>
        <UI.Column size="5">
          <UI.Text heading>Value</UI.Text>
        </UI.Column>
      </UI.Row>

      <UI.Divider />

      {!specifications && <UI.Text>No specification yet</UI.Text>}

      {specifications.map((spec, i) => {
        return (
          <UI.Row
            style={styles.list}
            key={`${spec.specification + spec.value}`}>
            <UI.Column size="4">
              <UI.Text heading>
                <UI.Text heading>{spec.specification}</UI.Text>
              </UI.Text>
            </UI.Column>
            <UI.Column size="6">
              <UI.Text heading>
                <UI.Text>{spec.value}</UI.Text>
              </UI.Text>
            </UI.Column>
            <UI.Column style={{alignItems: 'center'}} size="2">
              <UI.Clickable onClick={() => onRemoveItem(i)}>
                <UI.Icon name="md-close" />
              </UI.Clickable>
            </UI.Column>
          </UI.Row>
        );
      })}

      <UI.Spacer medium />

      <UI.Row style={{justifyContent: 'space-between'}}>
        <UI.Column size="5">
          <UI.Text heading>Specification</UI.Text>
          <UI.TextInput
            onChangeText={(value) => setSpec(value)}
            value={spec}
            placeholder="eg: Colors"
          />
        </UI.Column>
        <UI.Column size="5">
          <UI.Text heading>Value</UI.Text>
          <UI.TextInput
            onChangeText={(value) => setValue(value)}
            value={value}
            placeholder="eg: Red, Blue..."
          />
        </UI.Column>
        <UI.Column size="2">
          <UI.Text />
          <UI.Button onClick={() => handleAddSpec()}>
            <UI.Icon color="#fff" name="ios-add" />
          </UI.Button>
        </UI.Column>
      </UI.Row>

      <UI.Spacer large />

      <UI.Button onClick={onContinue}>
        <UI.Text color="#fff">Continue</UI.Text>
      </UI.Button>

      <UI.Spacer large />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 10,
    borderBottomColor: inactiveColor,
    borderBottomWidth: 1,
  },
});

export default StepThree;
