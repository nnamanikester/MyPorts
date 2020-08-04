import React from 'react';
import * as UI from '../../../../components/common';
import {View} from 'react-native';
import {danger} from '../../../../components/common/variables';
import {useLazyQuery} from '@apollo/react-hooks';
import {connect} from 'react-redux';
import {GET_CATEGORIES} from '../../../../apollo/queries/category';

const StepTwo = ({
  show,
  onContinue,
  offline,
  name,
  category,
  description,
  onName,
  onCategory,
  onDescription,
}) => {
  if (!show) {
    return null;
  }

  const [categories, setCategories] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  const [getCategories, {data, error, loading}] = useLazyQuery(GET_CATEGORIES);

  React.useEffect(() => {
    if (!offline) {
      getCategories();
    }
    if (data) {
      setCategories(data.categories);
    }
  }, [data, error]);

  const validateInputs = () => {
    setErrors({});
    if (!name) {
      return setErrors({
        name: "You're required to provide a name for our product!",
      });
    }
    if (!description) {
      return setErrors({desc: "You're required to describe your product!"});
    }

    return onContinue();
  };

  return (
    <>
      <UI.Text h3>Update Product Info</UI.Text>
      <UI.Text color="" note>
        Fill the form below to tell your customers about your product.
      </UI.Text>

      <UI.Spacer medium />

      <UI.Text heading>Product name</UI.Text>
      <UI.Text color="" note>
        Tell your customers the name of your product.
      </UI.Text>
      <UI.Spacer />

      {errors.name ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <UI.Spacer />
          <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
          <UI.Spacer size={3} />
          <UI.Text color={danger}>{errors.name}</UI.Text>
          <UI.Spacer />
        </View>
      ) : null}

      <UI.TextInput
        onChangeText={onName}
        value={name}
        placeholder="Enter product name"
      />

      <UI.Spacer />

      <UI.Text heading>Category</UI.Text>
      <UI.Text note color="">
        Which category does your product belong?
      </UI.Text>
      <UI.Spacer />
      <UI.Select
        type="dropdown"
        selected={category}
        onChange={onCategory}
        data={
          categories &&
          categories.map((cat) => {
            return {label: cat.name, value: cat.id};
          })
        }
      />

      <UI.Spacer />

      <UI.Text heading>Product Description</UI.Text>
      <UI.Text color="" note>
        Describe your product here.
      </UI.Text>

      <UI.Spacer />

      {errors.desc ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <UI.Spacer />
          <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
          <UI.Spacer size={3} />
          <UI.Text color={danger}>{errors.desc}</UI.Text>
          <UI.Spacer />
        </View>
      ) : null}

      <UI.TextInput
        value={description}
        onChangeText={onDescription}
        placeholder="Enter product description"
        style={{height: 100}}
        multiline
      />

      <UI.Spacer large />

      <UI.Button onClick={() => validateInputs()}>
        <UI.Text color="#fff">Continue</UI.Text>
      </UI.Button>

      <UI.Spacer large />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(StepTwo);
