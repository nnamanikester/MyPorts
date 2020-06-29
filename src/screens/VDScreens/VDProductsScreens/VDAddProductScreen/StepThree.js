import React from 'react';
import * as UI from '../../../../components/common';
import { View } from 'react-native';
import { danger } from '../../../../components/common/variables';

const StepThree = ({ show, onContinue }) => {
  if (!show) return null;

  const [specifications, setSpecifications] = React.useState([]);

  const [spec, setSpec] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleAddSpec = () => {
    if (!spec || !value) return;

    setSpecifications([...specifications, { specification: spec, value }]);
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

      <UI.Row style={{ justifyContent: 'space-between' }}>
        <UI.Column size="7">
          <UI.Text heading>Specification</UI.Text>
        </UI.Column>
        <UI.Column size="5" style={{ alignItems: 'flex-end' }}>
          <UI.Text heading>Value</UI.Text>
        </UI.Column>
      </UI.Row>

      <UI.Divider />

      {!specifications && <UI.Text>No specification yet</UI.Text>}

      {specifications.map((spec) => {
        return (
          <UI.ListItem
            key={`${spec.specification + spec.value}`}
            body={<UI.Text>{spec.specification}</UI.Text>}
            right={<UI.Text>{spec.value}</UI.Text>}
          />
        );
      })}

      <UI.Spacer medium />

      <UI.Row style={{ justifyContent: 'space-between' }}>
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

      <UI.Button onClick={onContinue}>Continue</UI.Button>
    </>
  );
};

export default StepThree;
