import React from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ExchangeBadProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(ExchangeBadProductsScreen);
