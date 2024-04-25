import React from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Button, Modal, Portal, Text } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { increamentalValue } from '../core/utils';
import { OpportunityLineItem } from '../data/Record';

const ProductExchangeDialog = (props: any) => {
  const { visible, hideDialog, navigate, products } = props;
  const { t } = useTranslation();

  const confirmedAction = () => {
    // navigate();
    hideDialog();
  };
  const onChangeQuantity = (increamentalValue: any) => {
    console.log('Function not implemented.');
  };
  const updateProducts = (num: any) => {
    console.log('updateProducts', num);
  };
  const Product = ({ data }: any) =>
  (
    <View style={styles.item}>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{data?.Name}</Text>
          <Text style={styles.itemDetail}>
            {data?.ProductCode} | {data?.Product2Id}
          </Text>
          <Text>
            ${data?.UnitPrice}
          </Text>
        </View>
      </View>
      <View style={styles.itemQuantityContainer}>
        <View style={styles.quantityCotainer}>
          <FontAwesome5
            name="minus"
            size={15}
            color="white"
            style={{
              backgroundColor: '#17A1D9',
              padding: 10,
              alignSelf: 'center',
            }}
            onPress={() => {
              onChangeQuantity(-increamentalValue);
            }}
          />
          <TextInput
            style={styles.inputQuantity}
            editable
            keyboardType="numeric"
            onChangeText={(num) => updateProducts(num)}
            defaultValue={String(data?.Quantity)}
          />
          <FontAwesome5
            name="plus"
            size={15}
            color="white"
            style={{
              backgroundColor: '#17A1D9',
              padding: 10,
              alignSelf: 'center',
            }}
            onPress={() => {
              onChangeQuantity(increamentalValue);
            }}
          />
          <Text style={styles.totalText}>
            ${(data?.Quantity * data?.UnitPrice).toFixed(2)}
          </Text>
        </View>
        <Text style={styles.sugText}>
          Sug Qunt. 10
        </Text>
      </View>
    </View>
  );

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideDialog}
        style={styles.modal}
        dismissable={false}
      >
        <View style={styles.modelHeader}>
          <Text style={styles.headerText}>{t('BxBChange')}</Text>
          <Pressable
            onPress={hideDialog}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            <FontAwesome name="close" size={25} color="white" />
          </Pressable>
        </View>
        <View style={styles.container}>
          <View>
            <Text>{t('CheckInAskMessage')}</Text>
            {
              products.map((item: any) => {
                return <Product data={item} />
              })
            }
          </View>
          <View style={styles.modelFooter}>
            <Button onPress={confirmedAction} mode="outlined">
              {t('Delete')} {t('Order')}
            </Button>
            <Button onPress={hideDialog} mode="outlined">
              {t('Add')}
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'absolute',
    top: -200
  },
  modelHeader: {
    backgroundColor: '#2471A3',
    paddingLeft: 10,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center'
  },
  modelFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 16,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  item: {
    margin: 10,
    backgroundColor: '#FFF',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: 'space-around',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDetail: {
    fontSize: 16,
  },
  itemQuantityContainer: {
    justifyContent: 'center',
  },
  quantityCotainer: {
    flexDirection: 'row',
  },
  inputQuantity: {
    borderWidth: 1,
    padding: 4,
    borderColor: '#ccc',
    minWidth: 50,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  increamentBtn: {
    padding: 10,
  },
  sugText: {
    textAlign: 'left',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'right',
    alignSelf: 'center',
  },
});

export default memo(ProductExchangeDialog);
