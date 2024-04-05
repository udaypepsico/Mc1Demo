import React, { useCallback } from 'react';
import { memo } from 'react';
import { ListRenderItem, StatusBar, View } from 'react-native';
import { FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Record } from '../data/Record';

const ProductDetailsScreen = () => {

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="blue" />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#054997',
          }}
        >
            
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default memo(ProductDetailsScreen);
