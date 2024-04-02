import React, { useState } from 'react';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';

const HeaderSection = ({ updateVisitType }: { updateVisitType: any }) => {
  const [selectedItem, setSelectedItem] = useState('Today');
  const VisitType = ['Past', 'Today', 'Future'];

  return (
    <View style={styles.topHeader}>
      <View style={styles.textTopHeader}>
        {VisitType.map((itemType) => {
          return (
            <Pressable
              key={'_key ' + itemType}
              onPress={() => {
                setSelectedItem(itemType);
                updateVisitType(itemType);
              }}
            >
              {({ pressed }) => (
                <Text
                  variant="titleLarge"
                  style={[
                    styles.topTextStyle,
                    { color: selectedItem === itemType ? 'white' : '#17A3DA' },
                  ]}
                >
                  {itemType}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>
      <Octicons name="plus-circle" size={36} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  textTopHeader: {
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTextStyle: {
    fontSize: 24,
    fontWeight: '900',
  },
});

export default memo(HeaderSection);
