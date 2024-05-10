import React from 'react';
import { memo, useState } from 'react';
import { Pressable, View, StyleSheet, Animated, Easing } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ExpandableListItem = ({
  clickedChildren,
  expandedChildren,
}: {
  clickedChildren: React.ReactNode;
  expandedChildren: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(true);

  const [spinValue] = useState(new Animated.Value(0));

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const toggleExpand = () => {
    Animated.parallel([
      // First set up animation
      Animated.timing(spinValue, {
        toValue: expanded ? 0 : 1,
        duration: 500,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true, // To make use of native driver for performance
      }),
    ]).start();

    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={toggleExpand} style={styles.itemHeading}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {clickedChildren}
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <FontAwesome5 name="caret-up" size={20} color="white" />
          </Animated.View>
        </View>
      </Pressable>
      {expanded && expandedChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  itemHeading: {
    backgroundColor: 'rgb(7, 90, 154)',
    padding: 10,
    marginTop: 20,
    color: '#FFF',
    borderRadius: 5,
  },
  itemContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
});

export default memo(ExpandableListItem);
