import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { memo } from 'react';
import ProductScreen from './ProductScreen';
import SummaryScreen from './SummaryScreen';
import BxBExchange from './BxBExchange';
import MxBExchange from './MxBExchange';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const Tab = createMaterialTopTabNavigator();

const ProductStack = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#054997'
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle:{fontSize:12,fontWeight:'800'},
            tabBarIndicatorStyle: { backgroundColor: '#6A00C2' },
            tabBarActiveTintColor: '#6A00C2',
            tabBarInactiveTintColor: 'black',
          }}
        >
          <Tab.Screen name={t("Products")} component={ProductScreen} />
          <Tab.Screen name={t('BxBChange')} component={BxBExchange} />
          <Tab.Screen name={t('MxBChange')} component={MxBExchange} />
          <Tab.Screen name={t('Summary')} component={SummaryScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default memo(ProductStack);
