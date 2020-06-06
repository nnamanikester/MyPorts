import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {primaryColor} from '../variables';

const Accordion = ({children, initialIndex}) => {
  const [expandedIndex, setExpandedIndex] = useState(initialIndex || 0);

  const Children = children;

  const expand = (i) => {
    if (expandedIndex === i) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(i);
    }
  };

  return (
    <View style={styles.container}>
      {children.length > 1 ? (
        children.map((Child) => {
          if (Child.type.name == 'AccordionItem') {
            if (children.indexOf(Child) === expandedIndex) {
              return (
                <Child.type
                  index={children.indexOf(Child)}
                  children={Child.props.children}
                  expanded={true}
                  onExpand={() => expand(children.indexOf(Child))}
                  props={Child.props}
                  key={`"${children.indexOf(Child)}"`}
                />
              );
            }
            return (
              <Child.type
                index={children.indexOf(Child)}
                children={Child.props.children}
                onExpand={() => expand(children.indexOf(Child))}
                props={Child.props}
                key={`"${children.indexOf(Child)}"`}
                expanded={false}
              />
            );
          }
        })
      ) : (
        <Children.type
          index={0}
          expanded={true}
          onExpand={() => expand(0)}
          props={Child.props}
          key={`"${children.indexOf(Child)}"`}
          children={Children.props.children}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: primaryColor,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

Accordion.propTypes = {
  /**
   * Index of the expanded Accordion starting with `0`. Default is `0`.
   */
  initialIndex: PropTypes.number,
};

export {Accordion};
