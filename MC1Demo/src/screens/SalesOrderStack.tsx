import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyDayScreen from './MyDayScreen';
import ProductStack from './ProductStack';

const Stack = createStackNavigator();

const SalesOrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyDay"
        component={MyDayScreen}
        options={{ presentation: 'card', headerShown: false }}
      />
      <Stack.Screen
        name="ProductsTab"
        component={ProductStack}
        options={{
          presentation: 'card',
          headerShown: true,
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: "#6A00C2",
          headerStyle: { height: 70 },
        }}
      />
    </Stack.Navigator>
  );
};

export default memo(SalesOrderStack);
