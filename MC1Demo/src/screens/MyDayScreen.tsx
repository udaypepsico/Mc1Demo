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
import {
  Credentials,
  fetchData,
  setSelectedDate,
  getUserCredentials,
  selectedDateStringType,
  selectedVisitType,
  getQueryVisitType,
  getSelectedDate,
  selectedDate
} from '../lib/api';
import { Record, Visits } from '../data/Record';
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
import DateScrollContainer from '../components/DateScrollContainer';
import { NativeSegmentedControlIOSChangeEvent } from '@react-native-segmented-control/segmented-control';
import DateVisitComponent from '../components/DateVisitComponent';
import { generateDateTime } from '../core/utils';
import { useTranslation } from 'react-i18next';
import { ProductsType } from '../data/Products';

const results = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export interface selectedIndexVisitType {
  selectedIndex: number;
  visitType: string;
}

const MyDayScreen = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const [selectedIndexVisit, setSelectedIndexVisit] =
    useState<selectedIndexVisitType>({ selectedIndex: 0, visitType: 'Today' });

  const [dialogVisible, setDialogVisible] = useState(false);

  const [dateScrollVisible, setDateScrollVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigation = useNavigation();

  const queryClient = useQueryClient();

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

  const {
    isPending,
    error,
    data: selectedVisitTypeData,
    isFetching,
  } = useQuery<selectedVisitType, Error>({
    queryKey: ['visitType'],
    queryFn: () => getQueryVisitType(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData:{visitType:'Today'}
  });

  const {
    isPending: datePending,
    error: dateError,
    data: selectedDateData,
    isFetching: dateFetching,
  } = useQuery<selectedDate, Error>({
    queryKey: ['selectedDate'],
    queryFn: () => getSelectedDate(),
    initialData: { selectedDate: new Date() },
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const {
    isPending: visitPending,
    error: visitError,
    data: visitData,
    isFetching: visitFetching,
  } = useQuery<Visits[], Error>({
    queryKey: ['visits'],
    queryFn: () => fetchData(),
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
    setSelectedIndexVisit({ ...selectedIndexVisit, selectedIndex: id });
    // navigation.navigate('ProductListScreen');
  }

  const segmentValueChanged = (
    event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>
  ): void => {

    setValue(value^1);
  };

  const updateVisitType = (itemType: string) => {
    if (itemType === 'Today') {
      setSelectedDate(new Date());
      queryClient.setQueryData(['selectedDate'], { selectedDate: new Date() });
    }
    if (itemType === 'Future') {
      const dateformatString = generateDateTime(itemType, 1)[0]
        .DateFormatString;
      setSelectedDate(new Date(Date.parse(dateformatString!)));
      queryClient.setQueryData(['selectedDate'], {
        selectedDate: new Date(Date.parse(dateformatString!)),
      });
    }
    setSelectedIndexVisit({ ...selectedIndexVisit, visitType: itemType });
    queryClient.setQueryData(['visitType'], { visitType: itemType });
  };

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
            selectedIndexVisit={selectedIndexVisit}
            onCheckInPressed={(index: number) => {
              setDialogVisible(true);
            }}
            onCancelVisit={(index: number) => { }}
          >
            <View style={styles.topContainer}>
              <HeaderSection updateVisitType={updateVisitType} selectedVisitType = {selectedVisitTypeData} />
              <SegmentedControlTab
                segmentValueChanged={segmentValueChanged}
                segmentedValues={[t("My Day"), t("My Route")]}
                selectedIndex={value}
              />
              {selectedIndexVisit.visitType === 'Today' ? (
                <VisitSection totalVisits={visitData?.length} completedVisits={0} />
              ) : (
                <DateScrollContainer
                  type={selectedIndexVisit.visitType}
                  updateSelectedDate={(datetimestring: string) => {
                    setSelectedDate(new Date(Date.parse(datetimestring)));
                  }}
                />
              )}
              {selectedIndexVisit.visitType !== 'Future' && <CasesSection />}
            </View>
            <View style={styles.bottomContainer}>
              {selectedIndexVisit.visitType === 'Past' ? (
                <DateVisitComponent />
              ) : (
                <DateTimeComponent selectedDate={selectedDate} />
              )}
              {selectedIndexVisit.visitType === 'Today' && <MeetingSection />}
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
