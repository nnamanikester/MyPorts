import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {primaryColor} from '../variables';

/**
 * A Component that wraps `AccordionItem` as it's direct children to work properly.
 * The Accordion children are converted into an array of objaects with `0` index. The
 * `initialIndex` determines the index of the `AccordionItem` to be expanded on screen
 * render. The default id `0`. Setting `initialIndex` to `null` will make all Items
 * closed by default.
 */
const Accordion = ({children, initialIndex, style}) => {
  // The index of the expanded `AccordionItem`.
  const [expandedIndex, setExpandedIndex] = useState(initialIndex || 0);

  // A state used only when the `Accordion` has just one child.
  const [expanded, setExpanded] = useState(true);

  // making the children able to be used as a react element.
  const Children = children;

  // A function that is called after the `AccordionItem` header is being clicked.
  // It determines which accordion index to be expanded.
  const expand = (i) => {
    if (expandedIndex === i) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(i);
    }
  };

  return (
    <View style={{...styles.container, ...style}}>
      {children.length > 1 ? (
        children.map((Child) => {
          if (Child.type.name == 'AccordionItem') {
            if (children.indexOf(Child) === expandedIndex) {
              return (
                <Child.type
                  // Passes the Index of the `AccordionItem` as an `index` prop so as
                  // to be accessible by the `AccordionItem`.
                  index={children.indexOf(Child)}
                  // Passes the children down to the `AccordionItem` to be able to use
                  // it's own children
                  children={Child.props.children}
                  // Passes the `expanded` prop down to the `AccordionItem`.
                  expanded={true}
                  // Callback after the `AccordionItem` is being clicked
                  // Used to determine the value of the expanded `AccordionItem`.
                  onExpand={() => expand(children.indexOf(Child))}
                  // Passes the `AccordionItem` own props down to it, to be able to access it.
                  props={Child.props}
                  // Unique Key for each item in the array.
                  key={`"${children.indexOf(Child)}"`}
                />
              );
            }
            return (
              <Child.type
                // Passes the Index of the `AccordionItem` as an `index` prop so as
                // to be accessible by the `AccordionItem`.
                index={children.indexOf(Child)}
                // Passes the children down to the `AccordionItem` to be able to use
                // it's own children
                children={Child.props.children}
                // Passes the `expanded` prop down to the `AccordionItem`.
                expanded={false}
                // Callback after the `AccordionItem` is being clicked
                // Used to determine the value of the expanded `AccordionItem`.
                onExpand={() => expand(children.indexOf(Child))}
                // Passes the `AccordionItem` own props down to it, to be able to access it.
                props={Child.props}
                // Unique Key for each item in the array.
                key={`"${children.indexOf(Child)}"`}
              />
            );
          }
        })
      ) : (
        <Children.type
          // Passes the Index of the `AccordionItem` as an `index` prop so as
          // to be accessible by the `AccordionItem`.
          index={0}
          // Passes the children down to the `AccordionItem` to be able to use
          // it's own children
          children={Children.props.children}
          // Passes the `expanded` prop down to the `AccordionItem`.
          expanded={expanded}
          // Callback after the `AccordionItem` is being clicked
          // Used to determine the value of the expanded `AccordionItem`.
          onExpand={() => setExpanded(!expanded)}
          // Passes the `AccordionItem` own props down to it, to be able to access it.
          props={Children.props}
          // Unique Key for each item in the array.
          key={0}
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
  /**
   * A react StyleSheet object to be applied on the Accordion Container.
   */
  style: PropTypes.object,
};

export {Accordion};
