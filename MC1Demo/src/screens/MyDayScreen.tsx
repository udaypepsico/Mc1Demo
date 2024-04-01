import React, { memo, useState } from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ProductStack from './ProductStack';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Credentials, fetchData, getUserCredentials } from '../lib/api';
import { Record } from '../data/Record';
import { DotIndicator } from 'react-native-indicators';
import { ErrorMessage } from '../components/ErrorMessage';
import Svg, { Circle } from 'react-native-svg';
import VirtualizedListComponent from '../components/VirtualizedListComponent';
import VisitSection from '../components/VisitSection';
import CasesSection from '../components/CasesSection';
import HeaderSection from '../components/HeaderSection';
import SegmentedControlTab from '../components/SegmentedControlTab';
import MeetingSection from '../components/MeetingSection';
import StarMyDayComponent from '../components/StarMyDayComponent';
import DateTimeComponent from '../components/DateTimeComponent';
import DialogComponent from '../components/DialogComponent';
import { NativeSegmentedControlIOSChangeEvent } from '@react-native-segmented-control/segmented-control';

const results = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const MyDayScreen = () => {
  const [value, setValue] = useState(0);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [dialogVisible, setDialogVisible] = useState(false);

  const navigation = useNavigation();

  const {
    isPending: pending,
    error: credentialError,
    data: credentialsData,
    isFetching: credentialsFetching,
  } = useQuery<Credentials, Error>({
    queryKey: ['credentials'],
    queryFn: () => getUserCredentials(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (credentialError)
    return <ErrorMessage message={credentialError.message}></ErrorMessage>;

  if (!credentialsData) return null;

  function startMyDayButtonPressed(event: GestureResponderEvent): void {
    event.preventDefault();
    console.log('My days2 clicked');
  }

  function itemSelected(id: number) {
    setSelectedIndex(id);
    // navigation.navigate('ProductListScreen');
  }

  const segmentValueChanged = (
    event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>
  ): void => {};

  // Invalidate queries

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: addTodo,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //     queryClient.invalidateQueries({ queryKey: ['reminders'] })
  //   },
  // })

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
          <Svg
            pointerEvents="none"
            style={{ position: 'absolute' }}
            key={'_keySvg'}
          >
            {results.map((value) => {
              return (
                <Circle
                  key={'_key ' + value}
                  cx={0}
                  cy={0}
                  r={value * 20}
                  strokeWidth={10}
                  fill="transparent"
                  stroke="#05448D"
                />
              );
            })}
          </Svg>
          <VirtualizedListComponent
            itemSelected={itemSelected}
            selectedIndex={selectedIndex}
            onCheckInPressed={(index: number) => {
              setDialogVisible(true);
            }}
            onCancelVisit={(index: number) => {}}
          >
            <View style={styles.topContainer}>
              <HeaderSection />
              <SegmentedControlTab
                segmentValueChanged={segmentValueChanged}
                segmentedValues={['MY DAY', 'MY ROUTE']}
                selectedIndex={value}
              />
              <VisitSection />
              <CasesSection />
            </View>
            <View style={styles.bottomContainer}>
              <StarMyDayComponent
                startMyDayButtonPressed={startMyDayButtonPressed}
              />
              <DateTimeComponent />
              <MeetingSection />
            </View>
          </VirtualizedListComponent>
          <DialogComponent
            visible={dialogVisible}
            hideDialog={() => {
              setDialogVisible(false);
            }}
            navigate={() => {
              navigation.navigate('ProductsTab');
              setDialogVisible(false);
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {},
  bottomContainer: {
    backgroundColor: '#F1F5F7',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default memo(MyDayScreen);
