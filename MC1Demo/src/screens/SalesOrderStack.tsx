import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyDayScreen from './MyDayScreen';
import ProductStack from './ProductStack';

const Stack = createStackNavigator();

const SalesOrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name = "MyDay" component={MyDayScreen} options={{presentation:'card'}}/>
      <Stack.Screen name = "ProductsTab" component={ProductStack} options={{presentation:'card'}}/>
    </Stack.Navigator>
  );
};

export default memo(SalesOrderStack);
