import React, { memo, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../core/theme';
import {
  Credentials,
  fetchImage,
  getCurrentVisit,
  getQueryVisitType,
  selectedVisitType,
} from '../lib/api';
import { Visits } from '../data/Record';

import { Linking } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

const LeftImageContent = (props: any) => <Avatar.Image {...props} size={50} />;

const LeftNonImageContent = (props: any) => (
  <Avatar.Icon {...props} size={50} />
);

const CustomerItem = ({
  customerRecord,
  index,
  itemPress,
  selectedIndex,
  onCheckInPressed,
  onCancelVisit,
}: {
  customerRecord: Visits;
  index: number;
  itemPress: any;
  selectedIndex: number;
  onCheckInPressed: any;
  onCancelVisit: any;
}) => {
  const queryClient = useQueryClient();

  const { t } = useTranslation();

  const {
    isPending,
    error,
    data: fileUrl,
  } = useQuery<string, Error>({
    queryKey: ['accountImage' + index],
    queryFn: () =>
      fetchImage(
        (queryClient.getQueryData(['credentials']) as Credentials).accessToken,
        customerRecord.Account!.PhotoUrl
      ),
  });

  const {
    isPending: isVisitFetchPending,
    error: isVisitFetchingError,
    data: visitTypeData,
  } = useQuery<selectedVisitType, Error>({
    queryKey: ['visitType'],
    queryFn: () => getQueryVisitType(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: { visitType: 'Today' },
  });

  const {
    isPending: iscurrentVisitIndexFetchPending,
    error: iscurrentVisitIndexFetchingError,
    data: currentVisitIndexData,
  } = useQuery<number, Error>({
    queryKey: ['currentVisitIndex'],
    queryFn: () => getCurrentVisit(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: 0,
  });

  return (
    <Card
      onPress={() => itemPress(index)}
      mode="elevated"
      elevation={4}
      style={[
        index === selectedIndex
          ? styles.selectedCellContainer
          : styles.cellContainer,
        styles.shadowProp,
      ]}
    >
      <View style={styles.cellContentStyle}>
        {visitTypeData.visitType === 'Today' && (
          <View
            style={{
              backgroundColor:
                index === currentVisitIndexData ? '#3FD571' : '#F1F5F6',
              paddingVertical: 10,
              paddingLeft: 10,
            }}
          >
            <Text>
              {index === currentVisitIndexData
                ? t('Current Visit')
                : customerRecord.isVisited
                ? t('Visited')
                : t('Upcoming Visit')}
            </Text>
          </View>
        )}
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            {fileUrl && fileUrl.length > 0 ? (
              <LeftImageContent
                source={{ uri: `data:image/png;base64, ${fileUrl}` }}
              />
            ) : (
              <LeftNonImageContent icon="store" />
              // <LeftImageContent source={{
              //   uri: customerRecord.PhotoUrl,
              // }} />
            )}
            {visitTypeData.visitType === 'Past' && (
              <Avatar.Icon
                icon="check"
                size={30}
                color="white"
                style={{
                  marginTop: -12.5,
                  zIndex: 2,
                  alignSelf: 'flex-end',
                  backgroundColor: '#3FD571',
                }}
              />
            )}
          </View>
          <View style={styles.descriptionContainer}>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
              {customerRecord.Account!.Name}
            </Text>
            <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
              {customerRecord.Account!.Phone
                ? '#' + customerRecord.Account?.Phone
                : ''}
            </Text>
            <Text lineBreakMode="middle" style={{ color: '#878787' }}>
              {customerRecord.Account!.Description}
            </Text>
            <View style={styles.addressContainer}>
              <Text lineBreakMode="middle" style={{ color: '#878787' }}>
                {(customerRecord.Account!.ShippingStreet
                  ? customerRecord.Account!.ShippingStreet + ' '
                  : 'H 2342') +
                  (customerRecord.Account!.ShippingCity
                    ? customerRecord.Account!.ShippingCity + ' '
                    : 'Maxico City') +
                  (customerRecord.Account!.ShippingState
                    ? customerRecord.Account!.ShippingState + ' '
                    : 'ITL') +
                  (customerRecord.Account!.ShippingCountry
                    ? customerRecord.Account!.ShippingCountry + ' '
                    : 'SP') +
                  (customerRecord.Account!.ShippingPostalCode
                    ? customerRecord.Account!.ShippingPostalCode + ' '
                    : '32424')}
              </Text>
            </View>
            {visitTypeData.visitType === 'Past' && (
              <Button
                mode="contained"
                style={{
                  backgroundColor: '#3FD571',
                  alignSelf: 'flex-start',
                  marginTop: 5,
                }}
              >
                {t('ORDER TAKEN')}
              </Button>
            )}
          </View>
          <View style={styles.phoneLocationContainer}>
            <View
              style={{
                justifyContent: 'flex-start',
                flex: 1,
                paddingTop: 20,
              }}
            >
              <FontAwesome
                name="phone"
                size={25}
                color="#17A3DA"
                onPress={() => {
                  Linking.openURL(`tel:${customerRecord.Account!.Phone}`);
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                flex: 1,
                paddingBottom: 10,
              }}
            >
              <FontAwesome5 name="map-marker-alt" size={25} color="#17A3DA" />
            </View>
          </View>
        </View>
        {visitTypeData.visitType !== 'Past' && (
          <View style={styles.deliveryWorkOrdersContainer}>
            <View style={styles.deliveryContainer}>
              <MaterialCommunityIcons
                name="truck-outline"
                size={20}
                color="grey"
              />
              <Text style={{ paddingLeft: 5, color: '#535659' }}>
                {t('Upcoming Delivery')}
              </Text>
            </View>
            <View style={styles.workOrdersContianer}>
              <Text style={{ paddingRight: 5, color: '#535659' }}>
                {t('Work Orders')}
              </Text>
              <View style={styles.circleOutline}>
                <Text style={{ fontWeight: 'bold' }}>{0}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
      {visitTypeData.visitType === 'Today' &&
        index === currentVisitIndexData && (
          <Card.Actions>
            <Button
              icon="account-box-outline"
              onPress={() => {
                onCheckInPressed(index, customerRecord.AccountId);
              }}
            >
              {t('CheckIn')}
            </Button>
            <Button
              icon="cancel"
              onPress={() => {
                onCancelVisit(index);
              }}
            >
              {t('Cancel')}
            </Button>
          </Card.Actions>
        )}
    </Card>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  descriptionContainer: {
    paddingLeft: 10,
    flex: 5,
  },
  phoneLocationContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  deliveryWorkOrdersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F1F5F7',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  deliveryContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  workOrdersContianer: {
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
  },
  addressContainer: {
    marginTop: 10,
  },
  circleOutline: {
    paddingLeft: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  cellContainer: {
    borderWidth: 0,
    backgroundColor: 'white',
  },
  selectedCellContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  shadowProp: {
    shadowColor: theme.colors.primary,
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cellContentStyle: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default memo(CustomerItem);
