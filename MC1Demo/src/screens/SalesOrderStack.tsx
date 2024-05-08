import React, { memo, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import i18n from '../locales/i18n';
import MyDayScreen from './MyDayScreen';
import ProductStack from './ProductStack';
import CheckoutScreen from './CheckoutScreen';
import { t } from 'i18next';

const Stack = createStackNavigator();

const SalesOrderStack = () => {
  useEffect(() => {
    i18n.changeLanguage('es');
  }, [])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyDay"
        component={MyDayScreen}
        options={{ presentation: 'card', headerShown: false }}
      />
      <Stack.Screen
        name="ProductStack"
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
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: t('CheckOut') }}/>
    </Stack.Navigator>
  );
};

export default memo(SalesOrderStack);
