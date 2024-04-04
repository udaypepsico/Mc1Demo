import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { memo } from 'react';
import ProductScreen from './ProductScreen';
import ExchangeGoodProductsScreen from './ExchangeGoodProductsScreen';
import ExchangeBadProductsScreen from './ExchangeBadProductsScreen';
import SummaryScreen from './SummaryScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const ProductStack = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#054997',
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle:{backgroundColor: '#6A00C2'},
            tabBarActiveTintColor:'#6A00C2',
            tabBarInactiveTintColor:'black'
          }}
        >
          <Tab.Screen name="Products" component={ProductScreen} />
          <Tab.Screen
            name="ExchangeGoodProducts"
            component={ExchangeGoodProductsScreen}
          />
          <Tab.Screen
            name="ExchangeBadProducts"
            component={ExchangeBadProductsScreen}
          />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default memo(ProductStack);
