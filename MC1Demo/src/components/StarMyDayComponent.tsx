import React from 'react';
import { memo } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { theme } from '../core/theme';

const StartMyDayComponent = ({ startMyDayButtonPressed }:{startMyDayButtonPressed:(event: GestureResponderEvent)=>void}) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.startMyDayButton, styles.pressed]
          : styles.startMyDayButton
      }
      onPress={startMyDayButtonPressed}
    >
      <View>
        <Text style={styles.startMyDayButtonText}>START MY DAY</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  startMyDayButton: {
    backgroundColor: theme.colors.primary,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: -25,
    marginHorizontal: 20,
    zIndex: 2,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  pressed: {
    backgroundColor: theme.colors.inversePrimary,
  },
  startMyDayButtonText: {
    color: 'white',
  },
});

export default memo(StartMyDayComponent);
